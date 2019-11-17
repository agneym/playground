import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const StyledTabList = styled(TabList)`
  border-bottom: ${props => props.theme.tabs.tabHeader.borderBottom};
  padding: 0 0.8em;
`;

export const StyledTab = styled(Tab)`
  background-color: transparent;
  border: none;
  padding: 0.8em 0.5em;
  margin: 0 0.2em;
  cursor: pointer;

  &[data-selected] {
    border-bottom: ${props => props.theme.tabs.selectedTab.borderBottom};
  }
`;

export const StyledTabPanels = styled(TabPanels)`
  flex: 1;
`;

export const StyledTabPanel = styled(TabPanel)`
  height: 100%;
`;
