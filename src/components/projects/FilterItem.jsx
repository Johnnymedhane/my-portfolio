import { useProjects } from "../../contexts/ProjectsContext";

export function FilterItem({ project }) {
  const { selectItem, setSelectItem } = useProjects();
  const selected = project === selectItem;
  return (
    <li className="filter-item">
      <button className={selected ? "active" : ""}
        onClick={() => setSelectItem(project)}>{project} </button>
    </li>
  );
}
