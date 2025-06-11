
import { navList } from "../App"; 
import Logo from "./Logo";
import ButtonMode from "./ButtonMode";
import Hamburger from "./Hamburger";
import PagesNav from "./PagesNav";

export function Header() {
 

  return (
    <header className="head">
     <Logo />
     <Hamburger />

    <ButtonMode />
      <nav className="nav">
        <ul className="nav-list">
          {navList.map((nav, i) => (
            <PagesNav item={nav} key={i}  />
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;