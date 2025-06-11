import { useAppContext } from "../contexts/contextApi";


function Hamburger() {
    const { handleOpenNav } = useAppContext();
    return (
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={handleOpenNav}>
        <span className="hamburger"> </span>
      </button>
    )
}

export default Hamburger
