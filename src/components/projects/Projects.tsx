"use client";

import { BigScreen } from "./BigScreen";
import { SmallerScreen } from "./SmallerScreen";
import { ProjectsList } from "./ProjectsList";
import Section from "../../ui/Section";
import { useEffect, useState } from "react";

export function Projects() {
  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Section title="Projects" sectionType="projects">
      {windowWidth !== null && windowWidth >= 800 ? (
        <BigScreen />
      ) : (
        <SmallerScreen />
      )}
      <ProjectsList />
    </Section>
  );
}
