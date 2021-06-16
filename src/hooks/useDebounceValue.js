import { useState, useEffect } from "react";

import { trimString } from "@helpers";

export const useDebounceValue = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    setTyping(true);
    const timer = setTimeout(() => {
      setDebounceValue(value);
      setTyping(false);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [value]);

  return [trimString(debounceValue), typing];
};
