import React, { FC } from "react";

interface IProps {
  error: Error;
}

const ErrorDisplay: FC<IProps> = ({ error }) => {
  return <p>{error.message}</p>;
};

export default ErrorDisplay;
