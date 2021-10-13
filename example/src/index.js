import React from "react";
import { render } from "react-dom";
import "babel-polyfill";
import "@reach/tabs/styles.css";
import Playground from "@agney/playground";

const App = () => {
  const snippet = {
    markup: `<div id=app />`,
    css: `div { color: red }`,
    javascript: `import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const app = html\`
  <div>
    <p>Hello World from Playground!</p>
    <input type="text" />
  </div>\`

render(app, document.getElementById('app'));
    `,
  };
  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      <Playground
        initialSnippet={snippet}
        defaultEditorTab="javascript"
        defaultResultTab="result"
        mode="dark"
        transformJs
      />
    </div>
  );
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);
