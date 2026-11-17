"use client";

import { useEffect, useState } from "react";
import type { Dispatch, SetStateAction } from "react";

function useLocalStorage<T>(
  initialValue: T,
  key: string,
): [T, Dispatch<SetStateAction<T>>] {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    const storedValue = localStorage.getItem(key);
    return storedValue ? (JSON.parse(storedValue) as T) : initialValue;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [key, value],
  );

  return [value, setValue];
}

export default useLocalStorage;
