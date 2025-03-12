
 import { Link } from "react-router-dom";
import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { About } from "./About";
import { Contact } from "./Contact";

export function Main({ selectedNav }) {
  return (
    <main className="main">
      {selectedNav === 'about' && <About />}
      {selectedNav === 'projects' && <Projects />}
      {selectedNav === 'resume' && <Resume />}
      {selectedNav === 'skills' && <Skills />}
      {selectedNav === 'contact' && <Contact />}
    </main>
  );
}

