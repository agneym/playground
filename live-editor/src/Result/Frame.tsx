import React, { FC, useMemo, useState } from "react";

import { ISnippet } from "../types";
import constructSnippet from "../utils/constructSnippet";

interface IProps {
  id: string;
  snippet: ISnippet;
}

const Frame: FC<IProps> = ({ id, snippet }) => {
  const [code, setCode] = useState("");

  useMemo(() => {
    const code = constructSnippet(snippet, id);
    setCode(code);
  }, [snippet]);

  return (
    <iframe
      height="100%"
      width="100%"
      title={"example"}
      frameBorder="0"
      srcDoc={code}
    />
  );
};

export default Frame;
