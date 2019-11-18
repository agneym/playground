<p align="center"><img src="./assets/icon.png"></p>
<h2 align="center">Playground</h2>
<p align="center">
<strong>A simple playground for HTML, CSS and JavaScript supporting module imports.</strong>
<br><br>

**Playground** is a React component that runs entirely in the browser and does not require loading any third party sites.

## Usage

Install from `npm` with `npm install @agney/playground` or `yarn add @agney/playground`

```jsx
import Playground from "@agney/playground";

const App = () => {
  const snippet = {
    markup: `<div id=app />`,
    css: ``,
    javascript: `import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const app = html\`<div>Hello World from Playground!</div>\`

render(app, document.getElementById('app'));
    `,
  };
  return (
    <Playground
      id="example"
      initialSnippet={snippet}
      defaultEditorTab="javascript"
    />
  );
};
```

## Demo

> Soon

## Features

1. Autoreloading preview for change
2. Can load preview for predefined code.
3. Allows for ES module imports. This means you can add imports for any library that supports ES Module resolution and playground will automatically load it into your code.

## Applications

1. Add to static blogs to present your HTML, CSS or JavaScript code.
2. Allow users to change the code and see the output in real time. This could be big in educational articles and so.

## API

> Soon.

## Contributing

> Soon.

## Credits

<div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
