import { SelectItem } from "./SelectItem";
import { useProjects } from "../../contexts/ProjectsContext";
import List from "../../ui/List";

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
      <List item={`${showList ? "select-list" : "select-list-hide"}`} data={projectsCategory} renderItem={(project) => (
        <SelectItem key={project} project={project} />
      )} />
    </div>
  );
}

