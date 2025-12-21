
import { useEffect } from "react";
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

  useEffect(() => {
    let lastScroll = 0;
    
    const handleScroll = () => {
      const currentScroll = window.pageYOffset;
      const header = document.querySelector('.head');
      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling up
        header?.classList.add('scrolled-up');
      } else {
        // Scrolling down or at top
        header?.classList.remove('scrolled-up');
      }
      
      lastScroll = currentScroll;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


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