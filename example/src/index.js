import React, { Fragment } from "react";
import { render } from "react-dom";
import "babel-polyfill";
import Playground, { theme } from "@agney/playground";

const App = () => {
  console.log(theme);
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
    <Fragment>
      <Playground
        initialSnippet={snippet}
        defaultEditorTab="javascript"
        transformJs
        presets={["react"]}
      />
    </Fragment>
  );
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);
