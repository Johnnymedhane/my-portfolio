"use client";

import { useAppContext } from "../contexts/contextApi";
import styles from "./Header.module.css";

function Hamburger() {
  const { handleOpenMenu } = useAppContext();
  return (
    <button
      className={styles.navToggle}
      aria-label="Toggle navigation"
      onClick={handleOpenMenu}
    >
      <span className={styles.hamburger}> </span>
    </button>
  );
}

export default Hamburger;
