import React, { FC, useMemo, useEffect, useState } from "react";

import {
  StyledTabList,
  StyledTab,
  StyledTabPanels,
  StyledTabPanel,
  StyledTabs,
} from "../TabStyles";
import { ISnippet, ITabConfig, IResultTabs } from "../types";
import Console from "./Console";
import Frame from "./Frame";

interface IProps {
  id: string;
  snippet: ISnippet;
  defaultTab: IResultTabs;
  transformJs: boolean;
  presets: string[];
}

const Result: FC<IProps> = ({
  id,
  snippet,
  presets,
  defaultTab,
  transformJs,
}) => {
  const [logs, setLogs] = useState<unknown[]>([]);
  const tabs: Readonly<ITabConfig<IResultTabs>[]> = useMemo(
    () => [
      { name: "Result", value: "result" },
      { name: "Console", value: "console" },
    ],
    []
  );
  useEffect(() => {
    function waitForMessage() {
      if (typeof window !== "undefined") {
        window.addEventListener("message", data => {
          if (data.data.source === `frame-${id}`) {
            setLogs(prevLogs => [...prevLogs, ...data.data.message]);
          }
        });
      }
    }
    waitForMessage();
  }, [id]);
  return (
    <StyledTabs defaultIndex={tabs.findIndex(tab => tab.value === defaultTab)}>
      <StyledTabList>
        {tabs.map(tab => (
          <StyledTab key={tab.value}>{tab.name}</StyledTab>
        ))}
      </StyledTabList>
      <StyledTabPanels>
        <StyledTabPanel>
          <Frame
            id={id}
            snippet={snippet}
            transformJs={transformJs}
            presets={presets}
          />
        </StyledTabPanel>
        <StyledTabPanel>
          <Console logs={logs} />
        </StyledTabPanel>
      </StyledTabPanels>
    </StyledTabs>
  );
};

export default Result;
