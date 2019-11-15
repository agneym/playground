import React, { FC, useMemo, useState } from "react";
import { debounce } from "lodash";

import { ISnippet } from "../types";
import constructSnippet from "../utils/constructSnippet";

const debouncedConstructSnippet = debounce(constructSnippet, 800);

interface IProps {
  snippet: ISnippet;
}

const Frame: FC<IProps> = ({ snippet }) => {
  const id = "example";
  const [code, setCode] = useState("");

  useMemo(() => {
    const code = debouncedConstructSnippet(snippet, id);
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
