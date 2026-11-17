import type { Dispatch, SetStateAction } from "react";
import type { AboutValue } from "./AboutMe";

interface QualificationProps {
  index: number;
  value: AboutValue;
  showText: number | null;
  setShowText: Dispatch<SetStateAction<number | null>>;
}

export function Qualification({
  index,
  value,
  showText,
  setShowText,
}: QualificationProps) {
  const isTextVisible = index === showText;

  return (
    <li
      className={`benefits-item ${isTextVisible ? "show-text" : ""}`}
      onClick={() => setShowText(isTextVisible ? null : index)}
    >
      <h3>{value.title}</h3>
      {isTextVisible && <p className="text">{value.text}</p>}
      <span className="benefits-indicator">{isTextVisible ? "-" : "+"} </span>
    </li>
  );
}
