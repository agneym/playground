import React from "react";
import { render } from "react-dom";
import "babel-polyfill";
import Playground from "@agney/playground";

const App = () => {
  const snippet = {
    markup: `<h1>Content</h1>`,
    css: `h1 {color: red}`,
    javascript: `console.log('this')`,
  };
  return (
    <Playground
      id="example"
      initialSnippet={snippet}
      defaultEditorTab="css"
      defaultResultTab="console"
    />
  );
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);
