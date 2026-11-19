"use client";

import { usePathname } from "next/navigation";
import { useAppContext } from "../../contexts/contextApi";
import { Indicator } from "./Indicator";
import { SocialMedia } from "./SocialMedia";

export function Hero() {
  const { setSelectedNav, showIndicator, isDarkMode } = useAppContext();
  const pathname = usePathname();
  const isRootRoute = pathname === "/";

  const handleScroll = (sectionId: string) => {
    setSelectedNav(sectionId);
  };

  return (
    <div id="home" className="hero">
      <div className="hero-container">
        <div className="hero-image">
          <img
            src={isDarkMode ? "/images/black-profile.png" : "/images/profile.png"}
            alt="my-pic"
          />
        </div>

        <div className="hero-content">
          <h1>
            {" "}
            <span>Hello👋 I'm, </span>Johnny Medhane
          </h1>
          <h2>
            {" "}
            A Passionate <span>Frontend & Full-Stack Developer</span>
          </h2>
          <p>Building sleek, responsive and high-performance websites.</p>
          <div className="cta-buttons">
            <a
              href="#projects"
              onClick={() => handleScroll("projects")}
              className="btn"
            >
              View My Work
            </a>
            <a
              href="/Johnny_Medhane_CV.pdf"
              rel="noopener noreferrer"
              target="_blank"
              download
              className="btn btn-outline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24px"
                viewBox="0 -960 960 960"
                width="24px"
                fill="none"
              >
                <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
              </svg>
              Download CV
            </a>
          </div>

          <SocialMedia marginTop={5} />
        </div>
      </div>
      {showIndicator && isRootRoute && <Indicator />}
    </div>
  );
}
