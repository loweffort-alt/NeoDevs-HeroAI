import { MouseEvent, MouseEventHandler, MutableRefObject } from 'react';

interface HandlersX {
  handleMouseXDown: (e: MouseEvent) => void;
  handleMouseXMove: MouseEventHandler<HTMLDivElement>;
  handleMouseXUp: (e: MouseEvent) => void;
}

interface HandlersY {
  handleMouseYDown: (e: MouseEvent) => void;
  handleMouseYMove: MouseEventHandler<HTMLDivElement>;
  handleMouseYUp: (e: MouseEvent) => void;
}

export const createHandlersX = (
  press: boolean,
  setPress: (value: boolean) => void,
  setMove: (value: boolean) => void,
  leftRef: MutableRefObject<HTMLDivElement | null>,
  rightRef: MutableRefObject<HTMLDivElement | null>,
  resizerXRef: MutableRefObject<HTMLDivElement | null>
): HandlersX => {
  const handleMouseXDown = (e: MouseEvent) => {
    e.preventDefault();
    setPress(true);
    console.log("presionando");
  };

  const handleMouseXMove: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (press && leftRef.current && rightRef.current && resizerXRef.current) {
      setMove(true);
      const resizer = resizerXRef.current;
      const clientX = e.clientX;
      const deltaX = clientX - (resizer._clientX || clientX);
      console.log({ deltaX });
      resizer._clientX = clientX;

      const l = leftRef.current;
      const r = rightRef.current;

      // LEFT
      if (deltaX < 0) {
        const w = Math.round(parseInt(getComputedStyle(l).width) + deltaX);
        l.style.flex = `0 ${w < 10 ? 0 : w}px`;
        r.style.flex = "1 0";
      }

      // RIGHT
      if (deltaX > 0) {
        const w = Math.round(parseInt(getComputedStyle(r).width) - deltaX);
        r.style.flex = `0 ${w < 10 ? 0 : w}px`;
        l.style.flex = "1 0";
      }
    }
  };

  const handleMouseXUp = (e: MouseEvent) => {
    e.preventDefault();
    setMove(false);
    setPress(false);
    delete (e.target as any)._clientX;
    console.log("deje de presionar");
  };

  return {
    handleMouseXDown,
    handleMouseXMove,
    handleMouseXUp,
  };
};

export const createHandlersY = (
  pressX: boolean,
  setPressX: (value: boolean) => void,
  setMove: (value: boolean) => void,
  topRef: MutableRefObject<HTMLDivElement | null>,
  bottomRef: MutableRefObject<HTMLDivElement | null>,
  resizerYRef: MutableRefObject<HTMLDivElement | null>
): HandlersY => {
  const handleMouseYDown = (e: MouseEvent) => {
    e.preventDefault();
    setPressX(true);
    console.log("presionando");
  };

  const handleMouseYMove: MouseEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    if (pressX && topRef.current && bottomRef.current && resizerYRef.current) {
      setMove(true);
      const resizer = resizerYRef.current;
      const clientY = e.clientY;
      const deltaY = clientY - (resizer._clientY || clientY);
      console.log({ deltaY });
      resizer._clientY = clientY;

      const t = topRef.current;
      const b = bottomRef.current;

      // UP
      if (deltaY < 0) {
        const h = Math.round(parseInt(getComputedStyle(t).height) + deltaY);
        t.style.flex = `0 ${h < 10 ? 0 : h}px`;
        b.style.flex = "1 0";
      }

      // DOWN
      if (deltaY > 0) {
        const h = Math.round(parseInt(getComputedStyle(b).height) - deltaY);
        b.style.flex = `0 ${h < 10 ? 0 : h}px`;
        t.style.flex = "1 0";
      }
    }
  };

  const handleMouseYUp = (e: MouseEvent) => {
    e.preventDefault();
    setMove(false);
    setPressX(false);
    delete (e.target as any)._clientY;
    console.log("deje de presionar");
  };

  return {
    handleMouseYDown,
    handleMouseYMove,
    handleMouseYUp,
  };
};

