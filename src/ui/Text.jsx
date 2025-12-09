

export function Text({ content, title, children }) {
  return (
    <div className={`${content}-text`}>
      {title && <h2 className={`${content}-title`}>{title}</h2>}
      {children}
    </div>
  );
}

export default Text;