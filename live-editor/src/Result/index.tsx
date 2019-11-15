import React, { FC, useMemo } from "react";

import {
  StyledTabList,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
  StyledTabs,
} from "../TabStyles";
import { ISnippet, ITabConfig, IResultTabs } from "../types";

interface IProps {
  snippet: ISnippet;
}

const Result: FC<IProps> = ({ snippet }) => {
  const tabs: Readonly<ITabConfig<IResultTabs>[]> = useMemo(
    () => [
      { name: "Result", value: "result" },
      { name: "Console", value: "console" },
    ],
    []
  );
  return (
    <StyledTabs>
      <StyledTabList>
        {tabs.map(tab => (
          <StyledTab key={tab.value}>{tab.name}</StyledTab>
        ))}
      </StyledTabList>
      <StyledTabPanels>
        <StyledTabPanel>
          <p>{JSON.stringify(snippet)}</p>
        </StyledTabPanel>
        <StyledTabPanel>{<p>COnsole here</p>}</StyledTabPanel>
      </StyledTabPanels>
    </StyledTabs>
  );
};

export default Result;
