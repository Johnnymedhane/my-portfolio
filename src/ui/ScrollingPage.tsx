"use client";

import { HiArrowDown, HiArrowUp } from "react-icons/hi";

interface ScrollupProps {
  scrollDirection?: "down" | "up" | "";
}

function Scrollup({ scrollDirection }: ScrollupProps) {
  const handlescrollDown = () => {
    const ele = document.querySelector(".main-wrapper");
    ele?.scrollTo({ top: ele.scrollHeight, behavior: "smooth" });
  };
  const handleScrollUp = () => {
    const ele = document.querySelector(".main-wrapper");
    ele?.scrollTo({ top: 0, behavior: "smooth" });
  };
  if (!scrollDirection) return null;
  return scrollDirection === "down" ? (
    <button
      className="scroll-up"
      onClick={handlescrollDown}
      aria-label="Scroll Down"
    >
      <HiArrowDown />
    </button>
  ) : (
    <button
      className="scroll-up"
      onClick={handleScrollUp}
      aria-label="Scroll Up"
    >
      <HiArrowUp />
    </button>
  );
}

export default Scrollup;
