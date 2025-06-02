import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import { AppProvider } from './contextApi';
import { Mybackground } from './pages/myStory';
import HeroSection from './pages/HeroSection';
import ContactSection from './pages/ContactSection';
import ProjectsSecction from './pages/ProjectsSecction';
import ResumeSection from './pages/Resume.Section';
import SkillsSection from './pages/SkillsSection';
import AboutSection from './pages/AboutSection';

export const navList = ['home', 'about', 'skills', 'projects', 'resume', 'contact'];

function App() {
 
  return (
   <AppProvider className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HeroSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSecction />} />
          <Route path="/resume" element={<ResumeSection />} />
          <Route path="/contact" element={<ContactSection />} />
          <Route path='/my-story' element={<Mybackground />} />
      </Routes>
      
      </BrowserRouter>
      </AppProvider>

  );
}


export default App;
