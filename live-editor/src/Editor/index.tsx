import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { Tabs } from "@reach/tabs";

import { IEditorTabs, ISnippet } from "../types";
import EditorSetup from "./EditorSetup";
import { ITabConfig } from "../types";
import {
  StyledTabList,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
} from "./TabStyles";

const TabContainer = styled(Tabs)`
  width: 50%;
  flex: 0.5;
  border-right: 0.05em solid rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

interface IProps {
  code: ISnippet;
  onChange: (changed: string, type: IEditorTabs) => void;
}

const Editor: FC<IProps> = ({ code, onChange }) => {
  const tabs: Readonly<ITabConfig[]> = useMemo(
    () => [
      { name: "HTML", value: "markup" },
      { name: "CSS", value: "css" },
      { name: "JS", value: "javascript" },
    ],
    []
  );
  return (
    <TabContainer>
      <StyledTabList>
        {tabs.map(tab => (
          <StyledTab key={tab.value}>{tab.name}</StyledTab>
        ))}
      </StyledTabList>
      <StyledTabPanels>
        {tabs.map(tab => (
          <StyledTabPanel key={tab.value}>
            <EditorSetup
              code={code[tab.value]}
              onChange={onChange}
              language={tab.value}
            />
          </StyledTabPanel>
        ))}
      </StyledTabPanels>
    </TabContainer>
  );
};

export default Editor;
