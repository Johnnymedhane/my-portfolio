import { HiArrowDown, HiArrowUp } from "react-icons/hi";

function Scrollup({ scrollDirection }) {
  const ele = document.querySelector(".main-wrapper");
  const handlescrollDown = () => {
    ele.scrollTo({ top: ele.scrollHeight, behavior: "smooth" });
  }
  const handleScrollUp = () => {
    ele.scrollTo({ top: 0, behavior: "smooth" });
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
