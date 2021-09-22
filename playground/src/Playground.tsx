import React, { FC, useState, createElement } from "react";
import { useId } from "@reach/auto-id";
import { styled, setup, DefaultTheme } from "goober";

import Editor from "./Editor";
import Result from "./Result";
import { ISnippet, IEditorTabs, IResultTabs } from "./types";
import { ThemeProvider, useTheme } from "./utils/ThemeProvider";
import { ColorMode } from "./utils/theme";
import media from "./utils/media";
import Draggable from "./Draggable";

setup(createElement, undefined, useTheme);

const StyledDraggable = styled(Draggable)`
  border: 0.1em solid ${(props) => props.theme.container.borderColor};
  display: flex;
  min-height: ${(props) => props.theme.container.minHeight};

  ${media.phone} {
    flex-direction: column;
  }
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
  /**
   * Whether the result interface allows interaction
   */
  interactive?: boolean;
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
  interactive = false,
}) => {
  const [snippet, setSnippet] = useState<ISnippet>(initialSnippet);
  const id = useId(userId) as string;

  const onSnippetChange = (changed: string, type: IEditorTabs) => {
    setSnippet((snippet) => ({
      ...snippet,
      [type]: changed,
    }));
  };

  return (
    <ThemeProvider userTheme={theme} mode={mode}>
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
              interactive={interactive}
            />
          )}
        />
      </div>
    </ThemeProvider>
  );
};

export default Playground;
