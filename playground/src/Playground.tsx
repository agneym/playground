import React, { FC, useState } from "react";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";
import { useId } from "@reach/auto-id";

import Editor from "./Editor";
import Result from "./Result";
import { ISnippet, IEditorTabs, IResultTabs } from "./types";
import ourTheme from "./utils/theme";
import media from "./utils/media";

const Container = styled.div`
  border: ${props => props.theme.container.border};
  display: flex;
  min-height: ${props => props.theme.container.minHeight};

  ${media.phone`
    flex-direction: column;
  `}
`;

interface IProps {
  initialSnippet: ISnippet;
  defaultEditorTab?: IEditorTabs;
  defaultResultTab?: IResultTabs;
  transformJs?: boolean;
  presets?: string[];
  id?: string;
  theme?: DefaultTheme;
}

const Playground: FC<IProps> = ({
  id: userId,
  initialSnippet,
  defaultEditorTab = "markup",
  defaultResultTab = "result",
  transformJs = false,
  presets = [],
  theme = ourTheme,
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
        {id && (
          <Result
            id={id}
            snippet={snippet}
            defaultTab={defaultResultTab}
            transformJs={transformJs}
            presets={presets}
          />
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Playground;
