import { useState, useEffect, useCallback, RefObject } from "react";

interface IProps {
  containerRef: RefObject<HTMLDivElement | null>;
  dividerRef: RefObject<HTMLDivElement | null>;
  dividerWidth: number;
}

function useDrag({ containerRef, dividerRef, dividerWidth }: IProps) {
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

  return {
    leftWidth: width,
    rightWidth: containerRect ? containerRect.width - width - dividerWidth : 0,
  };
}

export default useDrag;
