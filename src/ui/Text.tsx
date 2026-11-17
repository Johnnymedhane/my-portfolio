import type { ReactNode } from "react";

interface TextProps {
  content: string;
  title?: string;
  children: ReactNode;
}

export function Text({ content, title, children }: TextProps) {
  return (
    <div className={`${content}-text`}>
      {title && <h2 className={`${content}-title`}>{title}</h2>}
      {children}
    </div>
  );
}

export default Text;
