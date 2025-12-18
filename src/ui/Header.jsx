
import Logo from "./Logo";

import Hamburger from "./Hamburger";
import PagesNav from "./PagesNav";
import List from "./List";
import DarkModeToggle from "./DarkModeToggle";

export function Header() {
 
 const navList = [
  "home",
  "about",
  "skills",
  "projects",
  "resume",
  "contact",
];


  return (
    <header className="head">
     <Logo />
     <Hamburger />

    <DarkModeToggle />
      <nav className="nav">
       <List item="nav" data={navList} renderItem={(nav, index) => (
         <PagesNav item={nav} key={index} />
       )} />
      </nav>
    </header>
  );
}


export default Header;