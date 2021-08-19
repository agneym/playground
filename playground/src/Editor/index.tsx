import React, { FC, useMemo } from "react";
import { styled } from "goober";
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
  min-width: ${(props) => props.theme.container.minWidth};
`;

interface IProps {
  width: number;
  code: ISnippet;
  defaultTab: IEditorTabs;
  onChange: (changed: string, type: IEditorTabs) => void;
}

const Editor: FC<IProps> = ({ code, defaultTab, onChange, width }) => {
  const tabs: Readonly<ITabConfig<IEditorTabs>[]> = useMemo(() => {
    const tabsArr = [];
    if (code.markup) {
      tabsArr.push({ name: "HTML", value: "markup", code: code.markup });
    }
    if (code.css) {
      tabsArr.push({ name: "CSS", value: "css", code: code.css });
    }
    if (code.javascript) {
      tabsArr.push({ name: "JS", value: "javascript", code: code.javascript });
    }
    return tabsArr;
  }, []);
  return (
    <TabContainer
      defaultIndex={tabs.findIndex(
        (tab) => tab.code && tab.value === defaultTab
      )}
      style={{ width: width }}
    >
      <StyledTabList>
        {tabs.map(
          (tab) => tab.code && <StyledTab key={tab.value}>{tab.name}</StyledTab>
        )}
      </StyledTabList>
      <StyledTabPanels>
        {tabs.map(
          (tab) =>
            tab.code && (
              <StyledTabPanel key={tab.value}>
                <EditorSetup
                  code={code[tab.value]}
                  onChange={onChange}
                  language={tab.value}
                />
              </StyledTabPanel>
            )
        )}
      </StyledTabPanels>
    </TabContainer>
  );
};

export default Editor;
