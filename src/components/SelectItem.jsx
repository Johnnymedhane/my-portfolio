import { useProjects } from "../contexts/ProjectsContext";

export function SelectItem({ project }) {
  const {handleSelectProject} = useProjects();
  return (
    <li className="select-item" onClick={() => handleSelectProject(project)}>

      <button> {project} </button>
    </li>
  );
}
