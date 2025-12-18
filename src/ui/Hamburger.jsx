import { useAppContext } from "../contexts/contextApi";


function Hamburger() {
    const { handleOpenMenu } = useAppContext();
    return (
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={handleOpenMenu}>
        <span className="hamburger"> </span>
      </button>
    )
}

export default Hamburger
