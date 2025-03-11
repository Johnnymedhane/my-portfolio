import { Resume } from "./Resume";
import { Projects } from "./Projects";
import { Skills } from "./Skills";
import { About } from "./About";
import { Contact } from "./Contact";
export function Main({ projects, selectedNav }) {

  return (
    <main className="main">
      
      {selectedNav === 'about' &&
        <About />}
      {selectedNav === 'projects' &&
        <Projects projects={projects} />
      }
      {selectedNav === 'resume' &&
        <Resume />
      }
      {selectedNav === 'skills' &&
      <Skills />
      }
      {selectedNav === 'contact' &&
        <Contact />
      }
    </main>
  );
}

