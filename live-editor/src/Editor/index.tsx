import React, { FC, useState } from "react";

import Header from "./Header";
import { IEditorTabs } from "../types";

const Editor: FC = () => {
  const [activeTab, setActiveTab] = useState<IEditorTabs>("js");
  return (
    <div>
      <Header activeTab={activeTab} setActive={setActiveTab} />
    </div>
  );
};

export default Editor;
