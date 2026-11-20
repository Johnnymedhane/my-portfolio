"use client";

import Link from "next/link";
import { useAppContext } from "../contexts/contextApi";
import styles from "./Header.module.css";

interface PagesNavProps {
  item: string;
}

function PagesNav({ item }: PagesNavProps) {
  const { selectedNav, closeNavBar } = useAppContext();

  const selected = item === selectedNav;
  return (
    <li className={styles.navItem}>
      <Link
        href={`/${item}`}
        className={selected ? styles.navActive : styles.navLink}
        onClick={() => closeNavBar(item)}
      >
        {item}
      </Link>
    </li>
  );
}

export default PagesNav;
