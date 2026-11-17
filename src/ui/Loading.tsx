interface LoadingProps {
  className?: string;
}

export function Loading({ className = "loading" }: LoadingProps) {
  return (
    <div className={className}>
      <div className="loading-icon">
        <i className="fa-solid fa-spinner"></i>
      </div>
    </div>
  );
}
