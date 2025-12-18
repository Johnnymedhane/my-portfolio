import { createContext, useContext, useEffect, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AppContext = createContext();

function AppProvider({ children }) {
  const [showIndicator, setShowIndicator] = useState(true);
  const [selectedNav, setSelectedNav] = useState("home");
  const [isDarkMode, setIsDarkMode] = useLocalStorage(false, "isDarkMode");
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const title = "JohnnyMe";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    function changTitle() {
      document.title = `${title} - ${selectedNav}`;
    }
    changTitle();
    return () => {
      document.title = title;
    };
  }, [selectedNav]);


  useEffect(function () { 
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-mode");
      root.classList.remove("light-mode");
    } else {
      root.classList.add("light-mode");
      root.classList.remove("dark-mode");
    }
  }, [isDarkMode]);
  useEffect(function () {
    const body = document.body;
    if (isMobileNavOpen) {
      body.classList.add("nav-open");
    } else {
      body.classList.remove("nav-open");
    }
  },[isMobileNavOpen])

  function closeNavBar(item) {
    setSelectedNav(item);
    setIsMobileNavOpen(false);
  }


  function handleOpenMenu() {
    setIsMobileNavOpen((prev) => !prev);
  }

  function toggleDarkMode() {
    setIsDarkMode((prevMode) => !prevMode);
  }

  return (
    <AppContext.Provider
      value={{
        showIndicator,
        setShowIndicator,
        selectedNav,
        setSelectedNav,
        title,
        isDarkMode,
        setIsDarkMode,
        isMobileNavOpen,
        toggleDarkMode,
        handleOpenMenu,
        closeNavBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

export { AppProvider, useAppContext };
