import type { FC } from "react";
import { styled } from "goober";
// @ts-expect-error - no types available for @agney/react-inspector
import Inspector from "@agney/react-inspector";

const Container = styled("div")`
  background-color: ${(props) => props.theme.console.background};
  height: 100%;

  li {
    font-size: 16px !important;
  }
`;

interface IProps {
  logs: unknown[];
}

const Console: FC<IProps> = ({ logs }) => {
  return (
    <Container>
      {logs.map((log: unknown, index: number) => (
        <Inspector data={log} key={index} theme="chromeDark" />
      ))}
    </Container>
  );
};

export default Console;
