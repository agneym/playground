import { ISnippet } from "../types";

/**
 * Constructs snippet from individual html, css and js code.
 */
function constructSnippet({ markup, css, javascript }: ISnippet, id: string) {
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
              message: rest,
            }, "*");
          }
          _privateLog.apply(console, arguments);
        }
      </script>
      <script type="module">
        ${javascript}
      </script>
    </body>
    </html>
  `;
}

export default constructSnippet;
