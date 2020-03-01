import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import media from "./utils/media";

export const StyledTabs = styled(Tabs)`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: ${props => props.theme.container.minWidth};

  ${media.phone`
    width: 100%;
  `}
`;

export const StyledTabList = styled(TabList)`
  border-bottom: ${props => props.theme.tabs.tabHeader.borderBottom};
  padding: 0 0.8em;
  background-color: ${props => props.theme.tabs.tabHeader.panelBackground || 'transparent'};
`;

export const StyledTab = styled(Tab)`
  background-color: ${props => props.theme.tabs.tabHeader.background};
  border: none;
  padding: 0.8em 0.5em;
  margin: 0 0.2em;
  cursor: pointer;
  color: ${props => props.theme.tabs.tabHeader.color};

  &[data-selected] {
    border-bottom: ${props => props.theme.tabs.selectedTab.borderBottom};
  }
`;

export const StyledTabPanels = styled(TabPanels)`
  flex: 1;

  ${media.phone`
    height: ${props => props.theme.tabs.tabPanel.phoneHeight};
  `}
`;

export const StyledTabPanel = styled(TabPanel)`
  height: 100%;
`;
