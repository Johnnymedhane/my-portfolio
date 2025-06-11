import { BigScreen } from "./BigScreen";
import { SmallerScreen } from "./SmallerScreen";
import { ProjectsList } from "./ProjectsList";










export function Projects() {




  return (
   
      <section id="projects">
        <div className="projects">
          <h2 className="section-title">Projects
          </h2>

          <BigScreen />
          <SmallerScreen  />
          <ProjectsList />
        </div>
      </section>
  );
}

