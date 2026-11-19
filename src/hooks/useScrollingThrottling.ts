"use client";

import { useRef, useCallback, useEffect, useState } from "react";

interface UseScrollingThrottlingOptions {
  delay?: number;
}

function useScrollingThrottling({
  delay = 600,
}: UseScrollingThrottlingOptions = {}): { windowHeight: number } {
  const [windowHeight, setWindowHeight] = useState(0);
  const lastCall = useRef(0);

  const throttled = useCallback(() => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall.current;

    if (timeSinceLastCall < delay) {
      return;
    }

    lastCall.current = now;
    setWindowHeight(window.scrollY);
  }, [delay]);

  useEffect(() => {
    window.addEventListener("scroll", throttled);

    return () => {
      window.removeEventListener("scroll", throttled);
    };
  }, [throttled]);

  return { windowHeight };
}

export default useScrollingThrottling;
