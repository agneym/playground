import React, { FC, useState, Fragment } from "react";
import SimpleEditor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";
import styled from "styled-components";

import Header from "./Header";
import { IEditorTabs, ISnippet } from "../types";

const Container = styled.div`
  width: 50%;
  flex: 0.5;
  border-right: 0.05em solid rgba(0, 0, 0, 0.2);
`;

interface IProps {
  code: ISnippet;
  onChange: (changed: string, type: IEditorTabs) => void;
}

const Editor: FC<IProps> = ({ code, onChange }) => {
  const [activeTab, setActiveTab] = useState<IEditorTabs>("javascript");
  return (
    <Container>
      <Header activeTab={activeTab} setActive={setActiveTab} />
      <SimpleEditor
        value={code[activeTab]}
        onValueChange={(value: string) => onChange(value, activeTab)}
        highlight={code => (
          <Highlight
            {...defaultProps}
            theme={theme}
            code={code}
            language={activeTab}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Fragment>
                {tokens.map((line, i) => (
                  <div {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => (
                      <span {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </Fragment>
            )}
          </Highlight>
        )}
        padding={10}
      />
    </Container>
  );
};

export default Editor;
