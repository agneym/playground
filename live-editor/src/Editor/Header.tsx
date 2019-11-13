import React, { FC, useMemo } from "react";

import TabButton from "../TabButton";
import { IEditorTabs, ITabConfig } from "../types";

interface IProps {
  activeTab: IEditorTabs;
  setActive: (e: IEditorTabs) => void;
}

const Header: FC<IProps> = ({ activeTab, setActive }) => {
  const tabs: Readonly<ITabConfig[]> = useMemo(
    () => [
      { name: "HTML", value: "html" },
      { name: "CSS", value: "css" },
      { name: "JS", value: "js" },
    ],
    []
  );
  return (
    <div>
      {tabs.map(tab => (
        <TabButton
          active={tab.value === activeTab}
          onClick={() => setActive(tab.value)}
        >
          {tab.name}
        </TabButton>
      ))}
    </div>
  );
};

export default Header;
