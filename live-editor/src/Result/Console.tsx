import React, { FC } from "react";
import Inspector from "react-inspector";

interface IProps {
  logs: unknown[];
}

const Console: FC<IProps> = ({ logs }) => {
  console.log(logs);
  return (
    <div>
      {logs.map((log: any, index: number) => (
        <Inspector data={log} key={index} theme="chromeDark" />
      ))}
    </div>
  );
};

export default Console;
