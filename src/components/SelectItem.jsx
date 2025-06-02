import { useProjects } from "../contexts/ProjectsContext";

export function SelectItem({ project, i, }) {
  const {handleSelectProject} = useProjects();
  return (
    <li className="select-item" onClick={() => handleSelectProject(project)}>

      <button> {project} </button>
    </li>
  );
}
