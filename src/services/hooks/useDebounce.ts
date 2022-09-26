import { useRef } from "react";
export const useDebounce = (fn, delay: number) => {
  const timeoutRef = useRef(null);

  const timeout = (...args) => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(args);
    }, delay);
  };
  return timeout;
};
