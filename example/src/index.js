import React from "react";
import { render } from "react-dom";

const App = () => {
  return <p>App Component</p>;
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);
