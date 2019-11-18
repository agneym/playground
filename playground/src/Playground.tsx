import React, { FC, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

import Editor from "./Editor";
import Result from "./Result";
import { ISnippet, IEditorTabs, IResultTabs } from "./types";
import theme from "./utils/theme";

const Container = styled.div`
  border: ${props => props.theme.container.border};
  display: flex;
  min-height: ${props => props.theme.container.minHeight};
`;

interface IProps {
  id: string;
  initialSnippet: ISnippet;
  defaultEditorTab?: IEditorTabs;
  defaultResultTab?: IResultTabs;
}

const Playground: FC<IProps> = ({
  id,
  initialSnippet,
  defaultEditorTab = "markup",
  defaultResultTab = "result",
}) => {
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
        <Editor
          code={snippet}
          defaultTab={defaultEditorTab}
          onChange={onSnippetChange}
        />
        <Result id={id} snippet={snippet} defaultTab={defaultResultTab} />
      </Container>
    </ThemeProvider>
  );
};

export default Playground;
