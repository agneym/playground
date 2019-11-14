import React, { FC, useState } from "react";
import styled from "styled-components";

import Header from "./Header";
import { IEditorTabs, ISnippet } from "../types";
import EditorSetup from "./EditorSetup";

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
      <EditorSetup
        code={code[activeTab]}
        onChange={onChange}
        language={activeTab}
      />
    </Container>
  );
};

export default Editor;
