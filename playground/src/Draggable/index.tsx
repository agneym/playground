import React, { FC, ReactNode, useRef } from "react";
import styled from "styled-components";
import useDrag from "./useDrag";

const Container = styled.div`
  display: flex;
  align-items: stretch;
`;

const DIVIDER_WIDTH = 3;

const Divider = styled.div`
  width: ${DIVIDER_WIDTH}px;
  cursor: col-resize;
`;

interface IProps {
  className?: string;
  leftChild: (width: number) => ReactNode;
  rightChild: (width: number) => ReactNode;
}

const Draggable: FC<IProps> = ({ className = "", leftChild, rightChild }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);

  const { leftWidth, rightWidth } = useDrag({
    containerRef,
    dividerRef,
    dividerWidth: DIVIDER_WIDTH,
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
