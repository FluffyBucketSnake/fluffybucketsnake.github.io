import { RefObject, useEffect, useState } from "react";

export enum ScrollDirection {
  Top,
}

export function useScrollWatcher<TElement extends HTMLElement>(
  target: RefObject<TElement>,
  direction: ScrollDirection
) {
  const [state, setState] = useState(false);
  useEffect(() => {
    const callback = () => {
      setState(target.current!.getBoundingClientRect().top < 0);
    };
    window.addEventListener("scroll", callback);
    return () => window.removeEventListener("scroll", callback);
  });
  return state;
}
