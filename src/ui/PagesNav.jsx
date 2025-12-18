import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/contextApi";

function PagesNav({ item }) {
  const { selectedNav, closeNavBar } = useAppContext();

  const selected = item === selectedNav;
  return (
    <li className="nav-item">
      <Link
        to={`/${item}`}
        className={selected ? "nav-active" : "nav-link"}
        onClick={() => closeNavBar(item)}
      >
        {item}
      </Link>
    </li>
  );

  // <li className="nav-item" onClick={closeNavBar}>
  //   <a className={selected ? "nav-active" : "nav-link"} href={`#${item}`}>{item}</a>
  // </li>
}

export default PagesNav;
