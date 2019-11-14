import React, { FC, useMemo } from "react";
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import { IEditorTabs, ISnippet } from "../types";
import EditorSetup from "./EditorSetup";
import { ITabConfig } from "../types";

const TabContainer = styled(Tabs)`
  width: 50%;
  flex: 0.5;
  border-right: 0.05em solid rgba(0, 0, 0, 0.2);
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
      <TabList>
        {tabs.map(tab => (
          <Tab key={tab.value}>{tab.name}</Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabs.map(tab => (
          <TabPanel key={tab.value}>
            <EditorSetup
              code={code[tab.value]}
              onChange={onChange}
              language={tab.value}
            />
          </TabPanel>
        ))}
      </TabPanels>
    </TabContainer>
  );
};

export default Editor;
