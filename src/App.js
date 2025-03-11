import { useState, useEffect } from "react";
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { About } from './About';
import { Mybackground } from './myStory';
import { Header } from "./Header";
import { Main } from "./Main";
import { MoreInfo } from "./MoreInfo";
import { Hero } from "./Hero";

export const navList = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];
const projects = [
  { name: 'Management Screen STD', category: 'QA', img: '/images/screen-manage.png', webLink: '', github: 'https://github.com/Johnnymedhane/QA_Projects_Exercises/blob/main/QA-KMS-%20STD.docx' },
  { name: 'RateRes STD', category: 'QA', img: '/images/rate-res.png', webLink: '', github: 'https://github.com/Johnnymedhane/QA_Projects_Exercises/blob/main/std%20RateRes.docx' },
  { name: 'Saving-planer STP', category: 'QA', img: '/images/stp saving-planer.png', webLink: '', github: 'https://github.com/Johnnymedhane/Saving-Planer/blob/main/QA/STP-Save%20Planer.docx' },
  { name: 'Spotify-Dataset', category: 'Python data-analist', img: '/images/python-spotify.png', webLink: '', github: 'https://github.com/Johnnymedhane/Python-projects-and-exercises/blob/main/Project_spotifay.dataset.ipynb' },
  { name: 'Dtaset analysis', github: 'https://github.com/Johnnymedhane/Python-projects-and-exercises/blob/main/Chipotle/Exercise_with_Solutions.ipynb' },
  { name: 'Saving-Planer', category: 'Web development', img: '/images/saving-planer.png', webLink: 'https://app.netlify.com/teams/johnnymedhane', github: 'https://github.com/Johnnymedhane/Saving-Planer' },
  { name: 'eat-n-split', category: 'Web development', img: '/images/bill-split.png', webLink: 'https://app.netlify.com/teams/johnnymedhane', github: 'https://github.com/Johnnymedhane/06-eat-n-split' },
  { name: 'Travel-List', category: 'Web development', img: '/images/to-do-list.png', webLink: 'https://dazzling-tulumba-2334c5.netlify.app/', github: 'https://github.com/Johnnymedhane/Travel-List' },
  { name: 'River-Puzzle', category: 'Web development', img: '/images/river-puzzle.png', webLink: ' https://johnnymedhane.github.io/river-puzzle/', github: 'https://github.com/Johnnymedhane/river-puzzle' },
  { name: 'Pizza-page', category: 'Web development', img: '/images/pizza-image.png', webLink: 'strong-trifle-c1690d.netlify.app', github: 'https://github.com/Johnnymedhane/Pizza-page' },
  { name: 'PopCorn', category: 'Web development', img: '/images/movies.png', webLink: 'https://johnnymedhane.github.io/usePopCorn/', github: 'https://github.com/Johnnymedhane/usePopCorn' },
  { name: 'Calculator', category: 'Web development', img: '/images/calculator2.png', webLink: 'myclculatorproject.netlify.app', github: 'https://github.com/Johnnymedhane/Calculator' },
];

function App() {
  const [showIndicator, setShowIndicator] = useState(true);
  const [selectedNav, setSelectedNav] = useState("about");
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
        <Routes>
          <Route exact path="/" element={
            <>
              <Hero showIndicator={showIndicator} />
              <Main projects={projects} selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/my-story" element={<Mybackground />} />
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

export default App;