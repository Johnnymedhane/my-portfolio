
import  { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Mybackground } from './myStory';
import { Header } from "./Header";
import { Main } from "./Main";
import { Hero } from "./Hero";
import { About } from "./About";  // Import the About component
import { Skills } from "./Skills"; // Import the Skills component
import { Projects } from "./Projects"; // Import the Projects component
import { Resume } from "./Resume"; // Import the Resume component
import { Contact } from "./Contact"; // Import the Contact component

export const navList = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];

function App() {
  const [showIndicator, setShowIndicator] = useState(true);
  const [selectedNav, setSelectedNav] = useState("home");
  const title = 'JohnnyMe';

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
    <Router>
      <div className="App">
        <ConditionalHeader selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
        <ConditionalHero showIndicator={showIndicator} setSelectedNav={setSelectedNav} />
        <Routes>
          <Route path="/" element={
            <Main selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
          } />
          <Route path="/my-story" element={<Mybackground />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/skills" element={<Skills />} />  
          <Route path="/projects" element={<Projects />} />  
          <Route path="/resume" element={<Resume />} />  
          <Route path="/contact" element={<Contact />} /> 
        </Routes>
      </div>
    </Router>
  );
}

function ConditionalHeader({ selectedNav, setSelectedNav }) {
  const location = useLocation();
  const hideHeaderPaths = ['/my-story'];

  if (hideHeaderPaths.includes(location.pathname)) {
    return null;
  }

  return <Header selectedNav={selectedNav} setSelectedNav={setSelectedNav} />;
}


function ConditionalHero( { showIndicator, setSelectedNav }) {
  const location = useLocation();
  const hideHeaderPaths = ['/my-story'];

  if (hideHeaderPaths.includes(location.pathname)) {
    return null;
  }

  return <Hero showIndicator={showIndicator} setSelectedNav={setSelectedNav} />;
}
export default App;
