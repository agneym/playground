import React, { FC, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Editor from "./Editor";
import Result from "./Result";
import { ISnippet, IEditorTabs } from "./types";
import theme from "./utils/theme";

const Container = styled.div`
  border: 0.1em solid rgba(0, 0, 0, 0.3);
  display: flex;
  min-height: 20em;
`;

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
    <ThemeProvider theme={theme}>
      <Container>
        <Editor code={snippet} onChange={onSnippetChange} />
        <Result snippet={snippet} />
      </Container>
    </ThemeProvider>
  );
};

export default LiveEditor;
