import React, { FC, ReactNode, useRef, useContext } from "react";
import styled, { ThemeContext } from "styled-components";

import useDrag from "./useDrag";

const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

const Divider = styled.div`
  width: ${props => props.theme.divider.width}px;
  cursor: col-resize;
  background-color: ${props => props.theme.divider.background};
`;

interface IProps {
  className?: string;
  leftChild: (width: number) => ReactNode;
  rightChild: (width: number) => ReactNode;
}

const Draggable: FC<IProps> = ({ className = "", leftChild, rightChild }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const themeContext = useContext(ThemeContext);

  const { leftWidth, rightWidth } = useDrag({
    containerRef,
    dividerRef,
    dividerWidth: themeContext.divider.width,
  });

  return (
    <Container className={className} ref={containerRef}>
      {leftChild(leftWidth)}
      <Divider ref={dividerRef} />
      {rightChild(rightWidth)}
    </Container>
  );
};

export default Draggable;
