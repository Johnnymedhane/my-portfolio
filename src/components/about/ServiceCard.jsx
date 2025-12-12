

export function ServiceCard({ icon, title, children }) {
  return (
    <div className="service-item">
      <div className="service-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <div className="service-description">
        {children}
      </div>
    </div>
  );
}
