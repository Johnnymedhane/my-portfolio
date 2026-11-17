"use client";

import { useRef, useEffect } from "react";
import type { MutableRefObject } from "react";

export const useIntersectionObserver = (
  options?: IntersectionObserverInit,
): MutableRefObject<(Element | null)[]> => {
  const elementsRef = useRef<(Element | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          // Stop observing after first animation
          observer.unobserve(entry.target);
        }
      });
    }, options);

    // Copy current ref to a local variable
    const observedElements = elementsRef.current;

    observedElements.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      observedElements.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [options]);

  return elementsRef;
};
