import type { ReactNode } from "react";

export interface TimelineEntry {
  name: string;
  year: string;
  description: string;
  children: ReactNode;
}

export function TimelineItem({ item }: { item: TimelineEntry }) {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{item.name}</h4>
      <p>{item.description}</p>
      <time className="timeline-item-year">{item.year}</time>
      {item.children}
    </li>
  );
}
