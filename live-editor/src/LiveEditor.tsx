import React, { FC, useState } from "react";

import Editor from "./Editor";
import Result from "./Result";
import { ISnippet, IEditorTabs } from "./types";

const initialSnippet = {
  markup: ``,
  css: ``,
  javascript: ``,
};

const LiveEditor: FC = () => {
  const [snippet, setSnippet] = useState<ISnippet>(initialSnippet);
  const onSnippetChange = (changed: string, type: IEditorTabs) => {
    setSnippet(snippet => ({
      ...snippet,
      [type]: changed,
    }));
  };
  return (
    <div>
      <Editor code={snippet} onChange={onSnippetChange} />
      <Result />
    </div>
  );
};

export default LiveEditor;
