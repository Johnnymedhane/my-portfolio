import { useRef, useCallback, useEffect, useState } from "react";

function useScrollingThrottling({ delay = 600 } = {}) {
  const [windowHeight, setWindowHeight] = useState(0);
  const lastCall = useRef(0);

  const throttled = useCallback(() => {
    const now = Date.now();
    const timeSinceLastCall = now - lastCall.current;
    
    if (timeSinceLastCall < delay) {
      console.log(`Throttled - blocked (${timeSinceLastCall}ms since last)`);
      return;
    }

    lastCall.current = now;

    const el = document.querySelector(".main-wrapper") || window;
    const y = el.scrollTop || window.scrollY;

    setWindowHeight(y);
    console.log(`✓ Scroll update: ${y}px (${timeSinceLastCall}ms since last)`);
  }, [delay]);

  useEffect(() => {
    const el = document.querySelector(".main-wrapper") || window;
    el.addEventListener("scroll", throttled);

    return () => {
      el.removeEventListener("scroll", throttled);
    };
  }, [throttled]);

  return { windowHeight };
}

export default useScrollingThrottling;
