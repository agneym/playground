import React, { FC, useState } from "react";

import Editor from "./Editor";
import Result from "./Result";
import { ISnippet } from "./types";

const initialSnippet = {
  html: ``,
  css: ``,
  js: ``,
};

const LiveEditor: FC = () => {
  const [snippet, setSnippet] = useState<ISnippet>(initialSnippet);
  return (
    <div>
      <Editor />
      <Result />
    </div>
  );
};

export default LiveEditor;
