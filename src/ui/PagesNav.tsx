"use client";

import Link from "next/link";
import { useAppContext } from "../contexts/contextApi";

interface PagesNavProps {
  item: string;
}

function PagesNav({ item }: PagesNavProps) {
  const { selectedNav, closeNavBar } = useAppContext();

  const selected = item === selectedNav;
  return (
    <li className="nav-item">
      <Link
        href={`/${item}`}
        className={selected ? "nav-active" : "nav-link"}
        onClick={() => closeNavBar(item)}
      >
        {item}
      </Link>
    </li>
  );
}

export default PagesNav;
