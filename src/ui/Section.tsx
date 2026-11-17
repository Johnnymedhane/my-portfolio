import type { ReactNode } from "react";

interface SectionProps {
  title: string;
  children: ReactNode;
  sectionType: string;
}

function Section({ title, children, sectionType }: SectionProps) {
  return (
    <section id={sectionType}>
      <div className={sectionType}>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
