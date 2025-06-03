import { useProjects } from "../contexts/ProjectsContext";
import { FilterItem } from "./FilterItem";

export function BigScreen() {
const { projectsCategory} = useProjects();

  return (
    <ul className="filter-list">
      {projectsCategory.map((project, i) => <FilterItem key={project}
        project={project}
       />)}
    </ul>
  );
}
