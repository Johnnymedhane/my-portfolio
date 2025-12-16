

import  { createContext, useContext, useEffect, useState } from 'react';

const AppContext = createContext();

function AppProvider({ children }) {
    const [showIndicator, setShowIndicator] = useState(true);
    const [selectedNav, setSelectedNav] = useState("home");
  const [isLightMode, setIsLightMode] = useState(() => {
      const savedMode = localStorage.getItem('isLightMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

    const title = 'JohnnyMe';


    function handleOpenNav() {
        document.body.classList.toggle("nav-open");
      }
    
      function toggleLightMode() {
        setIsLightMode(!isLightMode);
        document.body.classList.toggle("light-mode");
        localStorage.setItem("isLightMode", !isLightMode);
    }
    
    function closeNavBar(item) {
        setSelectedNav(item);
        document.body.classList.remove('nav-open');
      }

    useEffect(() => {
      const handleScroll = () => {
          if (window.scrollY > 70) {
              setShowIndicator(false);
        } else {
              setShowIndicator(true);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
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

    return (
        <AppContext.Provider value={{
            showIndicator,
            setShowIndicator,
            selectedNav,
            setSelectedNav,
            title,
            isLightMode,
            setIsLightMode,
            handleOpenNav,
            toggleLightMode,
            closeNavBar
            
        }}>
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
