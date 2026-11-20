"use client";

import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useAppContext } from "../contexts/contextApi";
import styles from "./Header.module.css";

function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useAppContext();
  return (
    <label className={styles.switch}>
      {isDarkMode ? (
        <span className={styles.sun}>
          <HiOutlineSun />
        </span>
      ) : (
        <span className={styles.moon}>
          <HiOutlineMoon />
        </span>
      )}

      <input type="checkbox" className={styles.input} onClick={toggleDarkMode} />
      <span className={styles.slider}></span>
    </label>
  );
}

export default DarkModeToggle;
