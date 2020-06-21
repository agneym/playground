import React, { Fragment } from "react";
import { render } from "react-dom";
import "babel-polyfill";
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
