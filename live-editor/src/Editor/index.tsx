import React, { FC, useState, Fragment } from "react";
import SimpleEditor from "react-simple-code-editor";
import Highlight, { defaultProps } from "prism-react-renderer";
import theme from "prism-react-renderer/themes/nightOwl";

import Header from "./Header";
import { IEditorTabs, ISnippet } from "../types";

interface IProps {
  code: ISnippet;
  onChange: (changed: string, type: IEditorTabs) => void;
}

const Editor: FC<IProps> = ({ code, onChange }) => {
  const [activeTab, setActiveTab] = useState<IEditorTabs>("javascript");
  return (
    <div>
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
    </div>
  );
};

export default Editor;
