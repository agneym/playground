import styled from "styled-components";
import { TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

export const StyledTabList = styled(TabList)`
  border-bottom: 0.1em solid rgba(0, 0, 0, 0.1);
  padding: 0 0.8em;
`;

export const StyledTab = styled(Tab)`
  background-color: transparent;
  border: none;
  padding: 0.8em 0.5em;
  margin: 0 0.2em;
  cursor: pointer;

  &[data-selected] {
    border-bottom: 0.1em solid #000000;
  }
`;

export const StyledTabPanels = styled(TabPanels)`
  flex: 1;
`;

export const StyledTabPanel = styled(TabPanel)`
  height: 100%;
`;
