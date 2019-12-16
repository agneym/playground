import React, { FC, useState, useCallback, useEffect, useRef } from "react";
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

  .divider {
    border: 1px solid transparent;
    cursor: col-resize;
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
  const [width, setWidth] = useState<number>(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const id = useId(userId);
  const ref = useRef<HTMLDivElement>(null);

  const onSnippetChange = (changed: string, type: IEditorTabs) => {
    setSnippet(snippet => ({
      ...snippet,
      [type]: changed,
    }));
  };

  useEffect(() => {
    if (ref.current) {
      setContainerWidth(ref.current.clientWidth);
      setWidth(ref.current.clientWidth / 2);
    }
  }, []);

  const resize = useCallback(
    (e: any) => {
      const movedInPx = e.clientX - 10;
      setWidth(movedInPx);
    },
    [setWidth]
  );

  const handleAddListener = useCallback(() => {
    document.addEventListener("mousemove", resize, false);
  }, []);

  const handleRemoveListener = useCallback(() => {
    document.removeEventListener("mousemove", resize, false);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container ref={ref}>
        <Editor
          width={width}
          code={snippet}
          defaultTab={defaultEditorTab}
          onChange={onSnippetChange}
        />
        {id && (
          <>
            <div
              onMouseDown={handleAddListener}
              onMouseUp={handleRemoveListener}
              className="divider"
            ></div>
            <Result
              width={containerWidth - width}
              id={id}
              snippet={snippet}
              defaultTab={defaultResultTab}
              transformJs={transformJs}
              presets={presets}
            />
          </>
        )}
      </Container>
    </ThemeProvider>
  );
};

export default Playground;
