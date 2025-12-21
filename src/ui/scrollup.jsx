import { HiArrowDown, HiArrowUp } from "react-icons/hi";

function Scrollup({ scrollDirection }) {
  const handlescrollDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  }
  const handleScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  if (!scrollDirection || scrollDirection === "") return ;
  return (
    scrollDirection === "down" ? ( 
      <button className="scroll-up" onClick={handlescrollDown} aria-label="Scroll Down">
      <HiArrowDown />
    </button>
    ) : 
    <button className="scroll-up" onClick={handleScrollUp} aria-label="Scroll Up">
      <HiArrowUp />
    </button>
  )
}

export default Scrollup
