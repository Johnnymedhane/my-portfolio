import type { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  children: ReactNode;
}

export function ServiceCard({ icon, title, children }: ServiceCardProps) {
  return (
    <div className="service-item">
      <div className="service-icon">{icon}</div>

      <h3>{title}</h3>

      <div className="service-description">{children}</div>
    </div>
  );
}
