"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "./Logo";
import Hamburger from "./Hamburger";
import PagesNav from "./PagesNav";
import List from "./List";
import DarkModeToggle from "./DarkModeToggle";
import styles from "./Header.module.css";

export function Header() {
  const navList = ["home", "about", "skills", "projects", "resume", "contact"];
  const headerRef = useRef<HTMLElement | null>(null);
  const [isScrolledUp, setIsScrolledUp] = useState(false);
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down - hide header
        setIsScrolledUp(true);
      } else {
        // Scrolling up or at top - show header
        setIsScrolledUp(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.head} ${isScrolledUp ? styles.scrolledUp : ""}`} >
      <Logo />
      <Hamburger />

      <DarkModeToggle />
      <nav className={styles.nav}>
        <List<string>
          item="nav"
          data={navList}
          listClassName={styles.navList}
          renderItem={(nav, index) => <PagesNav item={nav} key={index} />}
        />
      </nav>
    </header>
  );
}

export default Header;
