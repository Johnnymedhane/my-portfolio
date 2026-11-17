"use client";

import { useRouter } from "next/navigation";
import { useAppContext } from "../contexts/contextApi";

function Logo() {
  const router = useRouter();
  const { setSelectedNav } = useAppContext();
  function handleClick() {
    setSelectedNav("");
    router.push("/");
  }
  return (
    <div className="logo">
      <div onClick={handleClick}>
        <span> JM</span>
      </div>
    </div>
  );
}

export default Logo;
