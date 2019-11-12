import React, { FC } from "react";

import Editor from "./Editor";
import Result from "./Result";

const LiveEditor: FC = () => {
  return (
    <div>
      <Editor />
      <Result />
    </div>
  );
};

export default LiveEditor;
