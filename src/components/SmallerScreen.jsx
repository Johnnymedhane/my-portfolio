import { SelectItem } from "./SelectItem";
import { useProjects } from "../contexts/ProjectsContext";

export function SmallerScreen() {
  const { projectsCategory, selectItem,  showList, setShowList } = useProjects();



  return (
    <div className="filter-select-box">
      <button className={"filter-select"} onClick={() => setShowList(show => !show)}>
        <div className="select-value"> {!selectItem ? "Select Category" : selectItem} </div>
        <div className={!showList ? "select-icon" : "select-icon-turn"}>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </button>
      <ul className={showList ? "select-list" : "select-list-hide"}>
        {projectsCategory.map((project) => <SelectItem key={project}
          project={project}
         
          />)}
      </ul>
    </div>
  );
}
