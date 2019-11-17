import React, { FC, useMemo } from "react";
import styled from "styled-components";

import { IEditorTabs, ISnippet } from "../types";
import EditorSetup from "./EditorSetup";
import { ITabConfig } from "../types";
import {
  StyledTabs,
  StyledTabList,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
} from "../TabStyles";

const TabContainer = styled(StyledTabs)`
  border-right: 0.05em solid rgba(0, 0, 0, 0.2);
`;

interface IProps {
  code: ISnippet;
  defaultTab: IEditorTabs;
  onChange: (changed: string, type: IEditorTabs) => void;
}

const Editor: FC<IProps> = ({ code, defaultTab, onChange }) => {
  const tabs: Readonly<ITabConfig<IEditorTabs>[]> = useMemo(
    () => [
      { name: "HTML", value: "markup" },
      { name: "CSS", value: "css" },
      { name: "JS", value: "javascript" },
    ],
    []
  );
  return (
    <TabContainer
      defaultIndex={tabs.findIndex(tab => tab.value === defaultTab)}
    >
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
