import { useEffect } from "react";

export function useClickOutside(refs = [], toggle) {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      let res = true;
      if (refs.length > 0) {
        // console.log('ref',refs);
        refs?.forEach((ref) => {
          if (!ref?.current || ref?.current.contains(event.target)) {
            res = false;
          }
        });
        if (res) {
          toggle(false);
        }
      }
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, toggle]);
}

export function isFunction(functionToCheck) {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === "[object Function]"
  );
}

export const isEqual = (x = [], y = []) => {
  let isEqual = true;
  x.map((item, idx) => {
    const itemsEqual = item === y[idx];
    if (!itemsEqual) isEqual = false;
  });
  return isEqual;
};

export const getClasses = (obj) => {
  return Object.keys(obj).reduce((acc, key, i) => {
    const space = i === 0 ? "" : " ";
    return `${acc}${obj[key] ? `${space}${key}` : ""}`;
  }, "");
};