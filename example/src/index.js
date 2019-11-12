import React from "react";
import { render } from "react-dom";
import LiveEditor from "@agney/live-editor";

const App = () => {
  return <LiveEditor />;
};

const rootEl = document.getElementById("root");
render(<App />, rootEl);
