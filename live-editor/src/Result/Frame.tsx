import React, { FC, useMemo, useState, memo, Fragment } from "react";
import styled from "styled-components";

import { ISnippet } from "../types";
import constructSnippet from "../utils/constructSnippet";
import ErrorDisplay from "./ErrorDisplay";

const Container = styled.div`
  position: relative;
  height: 100%;
`;

interface IProps {
  id: string;
  snippet: ISnippet;
}

const Frame: FC<IProps> = memo(({ id, snippet }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState<Error | null>(null);

  useMemo(() => {
    try {
      const code = constructSnippet(snippet, id);
      setCode(code);
      setError(null);
    } catch (err) {
      setError(err);
    }
  }, [snippet]);

  return (
    <Container>
      <iframe
        height="100%"
        width="100%"
        title={"example"}
        frameBorder="0"
        srcDoc={code}
      />
      {error && <ErrorDisplay error={error} />}
    </Container>
  );
});

export default Frame;
