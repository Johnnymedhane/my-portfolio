import { Loading } from "./Loading";
import { ProjectItem } from "./ProjectItem";
import { useProjects } from "../contexts/ProjectsContext";






export function ProjectsList() {
  const { projectsList, isLoading} = useProjects()


  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="projects-list">
          {projectsList.map((project, i) => (
            <ProjectItem key={project.name} project={project} i={i}  />
          ))}
        </ul>
      )}
    </div>
  );
}
