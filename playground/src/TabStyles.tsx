import { styled } from "goober";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

import media from "./utils/media";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledTabs = styled(Tabs as any)`
  display: flex;
  flex-direction: column;
  width: 50%;
  min-width: ${(props) => props.theme.container.minWidth};

  ${media.phone} {
    width: 100%;
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledTabList = styled(TabList as any)`
  border-bottom: ${(props) => props.theme.tabs.tabHeader.borderBottom};
  padding: 0 0.8em;
  background-color: ${(props) => props.theme.tabs.tabHeader.panelBackground || "transparent"};
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledTab = styled(Tab as any)`
  background-color: ${(props) => props.theme.tabs.tabHeader.background};
  border: none;
  padding: 0.8em 0.5em;
  margin: 0 0.2em;
  cursor: pointer;
  color: ${(props) => props.theme.tabs.tabHeader.color};

  &[data-selected] {
    border-bottom: ${(props) => props.theme.tabs.selectedTab.borderBottom};
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledTabPanels = styled(TabPanels as any)`
  flex: 1;

  ${media.phone} {
    height: ${(props) => props.theme.tabs.tabPanel.phoneHeight};
  }
`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledTabPanel = styled(TabPanel as any)`
  height: 100%;
`;
