import { useRef, useEffect } from "react";

export const useIntersectionObserver = (options) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        } else {
          entry.target.classList.remove("animate");
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
