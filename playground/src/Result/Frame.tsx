import React, { FC, useMemo, useState, memo, useEffect } from "react";
import styled from "styled-components";

import { ISnippet } from "../types";
import constructSnippet from "../utils/constructSnippet";
import ErrorDisplay from "./ErrorDisplay";

const Container = styled.div`
  position: relative;
  height: 100%;

  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
  }
`;

interface IProps {
  id: string | number;
  snippet: ISnippet;
  transformJs: boolean;
  presets: string[];
}

const Frame: FC<IProps> = memo(({ id, snippet, transformJs, presets }) => {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);

  useMemo(() => {
    try {
      const code = constructSnippet(snippet, id, transformJs, presets);
      setCode(code);
      setError(null);
    } catch (err) {
      setError(err.message);
    }
  }, [snippet, transformJs]);

  useEffect(() => {
    function waitForMessage() {
      if (typeof window !== "undefined") {
        window.addEventListener("message", (data) => {
          if (
            data.data.source === `frame-${id}` &&
            data.data.message.type === "error"
          ) {
            setError(data.data.message.data);
          }
        });
      }
    }
    waitForMessage();
  }, [id]);

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
