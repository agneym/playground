import React, { FC, useMemo, useState, memo } from "react";
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
  transformJs: boolean;
}

const Frame: FC<IProps> = memo(({ id, snippet, transformJs }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState<Error | null>(null);

  useMemo(() => {
    try {
      const code = constructSnippet(snippet, id, transformJs);
      setCode(code);
      setError(null);
    } catch (err) {
      setError(err);
    }
  }, [snippet, transformJs]);

  return (
    <Container>
      <iframe
        height="100%"
        width="100%"
        title={"example"}
        frameBorder="0"
        srcDoc={code}
        loading="lazy"
      />
      {error && <ErrorDisplay error={error} />}
    </Container>
  );
});

export default Frame;
