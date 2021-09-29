import React from "react";
import { render } from "react-dom";
import "babel-polyfill";
import "@reach/tabs/styles.css";
import Playground from "@openHacking/playground";

const App = () => {
  const snippet = {
    markup: `<div id=app />`,
    css: `div { color: red }`,
    javascript: `import { h, Component, render } from 'preact';
import htm from 'htm';

const html = htm.bind(h);

const app = html\`<div>Hello World from Playground!</div>\`

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
        interactive={true}
      />
    </div>
  );
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);
