import React, {
  FC,
  ReactNode,
  useRef,
  useState,
  useEffect,
  useCallback,
} from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const DIVIDER_WIDTH = 5;

const Divider = styled.div`
  width: ${DIVIDER_WIDTH}px;
  height: 20rem;
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
  const [width, setWidth] = useState(0);
  const [containerRect, setContainerRect] = useState<DOMRect | null>(null);

  useEffect(() => {
    const containerEl = containerRef.current;
    if (containerEl) {
      const fullWidth = containerEl.clientWidth;
      const containerRect = containerEl.getBoundingClientRect();
      setContainerRect(containerRect);
      setWidth(fullWidth / 2);
    }
  }, []);
  const keepDragging = useCallback(
    (event: MouseEvent) => {
      const { clientX } = event;
      if (containerRect) {
        setWidth(clientX - containerRect.left);
      }
    },
    [containerRect]
  );
  const stopDrag = useCallback(() => {
    document.removeEventListener("mousemove", keepDragging);
    document.removeEventListener("mouseup", stopDrag);
  }, [keepDragging]);
  const startDrag = useCallback(() => {
    document.addEventListener("mousemove", keepDragging);
    document.addEventListener("mouseup", stopDrag);
  }, [keepDragging, stopDrag]);
  useEffect(() => {
    const dividerEl = dividerRef.current;
    if (dividerEl) {
      dividerEl.addEventListener("mousedown", startDrag);
    }
    return () => {
      if (dividerEl) {
        dividerEl.removeEventListener("mousedown", startDrag);
      }
    };
  }, [startDrag]);
  return (
    <Container className={className} ref={containerRef}>
      {leftChild(width)}
      <Divider ref={dividerRef} />
      {containerRect && rightChild(containerRect.width - width - DIVIDER_WIDTH)}
    </Container>
  );
};

export default Draggable;
