export function Loading({ className = "loading" }) {
  return (
    <div className={className}>
      <div className="loading-icon">
        <i className="fa-solid fa-spinner"></i>
      </div>
    </div>
  );
}
