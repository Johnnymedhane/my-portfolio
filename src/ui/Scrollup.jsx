import { HiArrowUp } from "react-icons/hi";

function Scrollup() {
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <button className="scroll-up" onClick={handleScrollUp} aria-label="Scroll to top">
      <HiArrowUp />
    </button>
  )
}

export default Scrollup
