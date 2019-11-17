import React from "react";
import { render } from "react-dom";
import "babel-polyfill";
import LiveEditor from "@agney/live-editor";

const App = () => {
  const snippet = {
    markup: `<h1>Content</h1>`,
    css: `h1 {color: red}`,
    javascript: `console.log('this')`,
  };
  return <LiveEditor initialSnippet={snippet} />;
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);
