import { ISnippet } from "../types";

/**
 * Constructs snippet from individual html, css and js code.
 */
function constructSnippet(
  { markup, css, javascript }: ISnippet,
  id: string | number,
  transformJs: boolean,
  presets: string[]
) {
  function constructJavaScript() {
    if (transformJs) {
      return `
        <script type="module">
          const BareIdentifierFormat = /^((?:@[^\\/]+\\/)?[^\\/]+)(\\/.*)?$/

          function validUrl(url) {
            try {
              new URL(url);
              return true;
            } catch(err) {
              return false;
            }
          }

          function unpkg(dependencies = {}) {
            return {
              visitor: {
                "ImportDeclaration|ExportNamedDeclaration|ExportAllDeclaration"(path) {
                  if (
                    !path.node.source || // Probably a variable declaration
                    validUrl(path.node.source.value) || // Valid URL
                    path.node.source.value.substr(0, 2) === "//" || // URL w/o protocol
                    [".", "/"].indexOf(path.node.source.value.charAt(0)) >= 0 // Local path
                  )
                    return; // Leave it alone

                  // A "bare" identifier
                  const match = BareIdentifierFormat.exec(path.node.source.value);
                  const packageName = match[1];
                  const file = match[2] || "";

                  console.warn(
                    dependencies[packageName],
                    'Missing version for package "%s" in dependencies; falling back to "latest"',
                    packageName
                  );

                  const version = dependencies[packageName] || "latest";

                  path.node.source.value = \`https://unpkg.com/\${packageName}@\${version}\${file}?module\`;
                }
              }
            };
          }

          Babel.registerPlugin('unpkg', unpkg);

          const code = Babel.transform(decodeURI(\`${encodeURI(
            javascript
          )}\`), {
            plugins: ['unpkg'],
            presets: ${JSON.stringify(presets)}  
          }).code;
          const script = document.createElement("script");
          script.type = "module";
          script.innerHTML = code;
          document.body.appendChild(script);
        </script>
      `;
    } else {
      return `
        <script>
          ${javascript}
        </script>
      `;
    }
  }
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      <title>Document</title>
      <style>${css}</style>
    </head>
    <body>
      ${markup}
      <span></span>
      <script>
        var _privateLog = console.log;
        console.log = function(...rest) {
          if(typeof window !== 'undefined') {
            window.parent.postMessage({
              source: "frame-${id}",
              message: {
                type: "log",
                data: rest
              },
            }, "*");
          }
          _privateLog.apply(console, arguments);
        }
        window.onerror = function(message) {
          if(typeof window !== 'undefined') {
            window.parent.postMessage({
              source: "frame-${id}",
              message: {
                type: "error",
                data: message
              },
            }, "*");
          }
        }
      </script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      ${constructJavaScript()}
    </body>
    </html>
  `;
}

export default constructSnippet;
