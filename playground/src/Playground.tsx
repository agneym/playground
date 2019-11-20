import React, { FC, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { useId } from "@reach/auto-id";

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
  initialSnippet: ISnippet;
  defaultEditorTab?: IEditorTabs;
  defaultResultTab?: IResultTabs;
  transformJs?: boolean;
  presets?: string[];
  id?: string;
}

const Playground: FC<IProps> = ({
  id: userId,
  initialSnippet,
  defaultEditorTab = "markup",
  defaultResultTab = "result",
  transformJs = false,
  presets = [],
}) => {
  const [snippet, setSnippet] = useState<ISnippet>(initialSnippet);

  const id = useId(userId);

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
        <Result
          id={id}
          snippet={snippet}
          defaultTab={defaultResultTab}
          transformJs={transformJs}
          presets={presets}
        />
      </Container>
    </ThemeProvider>
  );
};

export default Playground;
