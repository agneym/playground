import React from "react";
import { render } from "react-dom";
import Editor from "@agney/react-editor";

const App = () => {
  return <Editor />;
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);
