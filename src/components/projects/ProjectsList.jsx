import { Loading } from "../../ui/Loading";
import { ProjectItem } from "./ProjectItem";
import { useProjects } from "../../contexts/ProjectsContext";
import List from "../../ui/List";






export function ProjectsList() {
  const { projectsList, isLoading} = useProjects()


  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <List 
          item="projects" 
          data={projectsList} 
          renderItem={(project, index) => (
            <ProjectItem key={project.name} project={project} i={index} />
          )} 
        />
      )}
    </div>
  );
}


