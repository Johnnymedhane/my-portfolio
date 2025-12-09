import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AppProvider } from './contexts/contextApi';
import { ProjectsProvider } from './contexts/ProjectsContext';
import { Loading } from './ui/Loading';

// Eager loading for critical components
import AppLayout from './ui/AppLayout';

// Lazy loading for route components
const HomePage = lazy(() => import('./pages/HomePage'));
const HeroSection = lazy(() => import('./pages/HeroSection'));
const AboutSection = lazy(() => import('./pages/AboutSection'));
const SkillsSection = lazy(() => import('./pages/SkillsSection'));
const ProjectsSecction = lazy(() => import('./pages/ProjectsSecction'));
const ResumeSection = lazy(() => import('./pages/Resume.Section'));
const ContactSection = lazy(() => import('./pages/ContactSection'));
const Mybackground = lazy(() => import('./pages/myStory').then(module => ({ default: module.Mybackground })));



function App() {
 
  return (
    
    <AppProvider className="App">
      <ProjectsProvider>

        <BrowserRouter>
          <Suspense fallback={<Loading />}>
            <Routes>

              <Route path='/' element={<AppLayout />}>
                <Route index element={<Navigate replace to="/allPages" />} />
                <Route path="/allPages" element={<HomePage />} />
                <Route path="/home" element={<HeroSection />} />

                <Route path="/about" element={<AboutSection />} />
                <Route path="/skills" element={<SkillsSection />} />
                <Route path="/projects" element={<ProjectsSecction />} />
                <Route path="/resume" element={<ResumeSection />} />
                <Route path="/contact" element={<ContactSection />} />
                <Route path='/my-story' element={<Mybackground />} />
              </Route>

            </Routes>
          </Suspense>
        </BrowserRouter>
      </ProjectsProvider>
      </AppProvider>

  );
}


export default App;
