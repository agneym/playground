import React, { FC, MouseEvent } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ active: boolean }>`
  ${props =>
    props.active &&
    `
    color: red;
  `}
`;

interface IProps {
  active: boolean;
  onClick: (event: MouseEvent) => void;
}

const TabButton: FC<IProps> = ({ active, onClick, children }) => {
  return (
    <StyledButton active={active} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default TabButton;
