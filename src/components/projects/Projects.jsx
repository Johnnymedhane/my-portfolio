import { BigScreen } from "./BigScreen";
import { SmallerScreen } from "./SmallerScreen";
import { ProjectsList } from "./ProjectsList";
import Section from "../../ui/Section";










export function Projects() {




  return (
   
      <Section title="Projects" sectionType="projects">
        
          

          <BigScreen />
          <SmallerScreen  />
          <ProjectsList />
       
      </Section>
  );
}

