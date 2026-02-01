import useScrollingThrottling from "../../hooks/useScrollingThrottling";

export function Indicator() {
  const { windowHeight } = useScrollingThrottling(600);

  if (windowHeight > 100) return null;

  return (
    <div className="indicator" data-title="Explore">
      <a href="#about">
        <span className="material-symbols-outlined">
          keyboard_double_arrow_down
        </span>
      </a>
    </div>
  );
}
