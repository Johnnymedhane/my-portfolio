
import Logo from "./Logo";
import ButtonMode from "./ButtonMode";
import Hamburger from "./Hamburger";
import PagesNav from "./PagesNav";
import List from "./List";

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

    <ButtonMode />
      <nav className="nav">
       <List item="nav" data={navList} renderItem={(nav, index) => (
         <PagesNav item={nav} key={index} />
       )} />
      </nav>
    </header>
  );
}


export default Header;