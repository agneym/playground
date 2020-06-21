import React, { FC, useState, useEffect } from "react";
import styled, { ThemeProvider, DefaultTheme } from "styled-components";
import { useId } from "@reach/auto-id";

import "@reach/tabs/styles.css";

import Editor from "./Editor";
import Result from "./Result";
import { ISnippet, IEditorTabs, IResultTabs } from "./types";
import getTheme, { ColorMode, theme as ourTheme } from "./utils/theme";
import media from "./utils/media";
import Draggable from "./Draggable";

const StyledDraggable = styled(Draggable)`
  border: 0.1em solid ${(props) => props.theme.container.borderColor};
  display: flex;
  min-height: ${(props) => props.theme.container.minHeight};

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
  mode: ColorMode;
}

const Playground: FC<IProps> = ({
  id: userId,
  initialSnippet,
  defaultEditorTab = "markup",
  defaultResultTab = "result",
  transformJs = false,
  presets = [],
  theme,
  mode = "light",
}) => {
  const [snippet, setSnippet] = useState<ISnippet>(initialSnippet);
  const id = useId(userId) as string;
  const [consolidatedTheme, setConsolidatedTheme] = useState<DefaultTheme>(
    ourTheme
  );

  const onSnippetChange = (changed: string, type: IEditorTabs) => {
    setSnippet((snippet) => ({
      ...snippet,
      [type]: changed,
    }));
  };

  useEffect(() => {
    setConsolidatedTheme(getTheme(mode));
  }, [mode]);

  return (
    <ThemeProvider theme={theme || consolidatedTheme}>
      <div className="playground">
        <StyledDraggable
          leftChild={(width) => (
            <Editor
              width={width}
              code={snippet}
              defaultTab={defaultEditorTab}
              onChange={onSnippetChange}
            />
          )}
          rightChild={(width) => (
            <Result
              width={width}
              id={id}
              snippet={snippet}
              defaultTab={defaultResultTab}
              transformJs={transformJs}
              presets={presets}
            />
          )}
        />
      </div>
    </ThemeProvider>
  );
};

export default Playground;
