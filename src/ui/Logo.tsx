"use client";

import { useRouter } from "next/navigation";
import { useAppContext } from "../contexts/contextApi";
import Image from "next/image";
import { useIsMobile } from "../hooks/useIsMobile";
import styles from "./Logo.module.css";

function Logo() {
  const router = useRouter();
  const { setSelectedNav } = useAppContext();
  const isMobile = useIsMobile();

  function handleClick() {
    setSelectedNav("");
    router.push("/");
  }

  const logoSrc = isMobile ? "/logo/jd-mark.svg" : "/logo/johnnydev-logo.png";

  return (
    <div className={styles.logo} onClick={handleClick}>
      <Image src={logoSrc} fill priority alt="Logo" />
    </div>
  );
}

export default Logo;
