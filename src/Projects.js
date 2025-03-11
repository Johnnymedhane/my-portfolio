import { useEffect, useState } from "react";
import { Loading } from "./Loading";



export function Projects({ projects }) {
  const projectsCategory = ['All', 'Web development', 'Python data-analist', 'QA'];
  const [selectItem, setSelectItem] = useState('');




  return (
    <article>
      <section id="projects">
        <div className="projects">
          <h2 className="section-title">Projects
          </h2>

          <BigScreen projects={projectsCategory}
            selectItem={selectItem} setSelectItem={setSelectItem} />
          <SmallerScreen projects={projectsCategory}
            selectItem={selectItem} setSelectItem={setSelectItem} />
          <ProjectsList projects={projects}
            selectItem={selectItem} />
        </div>
      </section>
    </article>
  );
}export function BigScreen({ projects, selectItem, setSelectItem }) {


  return (
    <ul className="filter-list">
      {projects.map((project, i) => <FilterItem key={i}
        project={project}
        i={i}
        setSelectItem={setSelectItem}
        selectItem={selectItem} />)}
    </ul>
  );
}
export function FilterItem({ project, i, selectItem, setSelectItem }) {
  const selected = project === selectItem;
  return (
    <li className="filter-item">
      <button className={selected ? "active" : ""}
        onClick={() => setSelectItem(project)}>{project} </button>
    </li>
  );
}
export function SmallerScreen({ projects, selectItem, setSelectItem }) {
  const [showList, setShowList] = useState(false);
  //  const [selectedProjectType, setSelectedProjectType] = useState('Select category');
  function handleSelectProject(project) {
    setSelectItem(project);
    setShowList(false);
  }

  return (
    <div className="filter-select-box">
      <button className={"filter-select"} onClick={() => setShowList(show => !show)}>
        <div className="select-value"> {!selectItem ? "Select Category" : selectItem} </div>
        <div className={!showList ? "select-icon" : "select-icon-turn"}>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </button>
      <ul className={showList ? "select-list" : "select-list-hide"}>
        {projects.map((project, i) => <SelectItem key={i}
          project={project}
          i={i}
          onClickItem={handleSelectProject} />)}
      </ul>
    </div>
  );
}
export function SelectItem({ project, i, onClickItem }) {
  return (
    <li className="select-item" onClick={() => onClickItem(project)}>

      <button> {project} </button>
    </li>
  );
}
export function ProjectsList({ projects, selectItem }) {
  const [projectsList, setProjectsList] = useState(projects.slice(9));
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!selectItem) return;
    setIsLoading(true);
    setTimeout(() => {
      if (selectItem === 'All') {
        setProjectsList(projects);
      } else {
        const filteredProjects = projects.filter(project => project.category === selectItem);
        setProjectsList(filteredProjects);
      }
      setIsLoading(false);
    }, 500); // Simulate a loading delay

    return () => console.log('clean up');
  }, [selectItem, projects]);

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <ul className="projects-list">
          {projectsList.map((project, i) => (
            <ProjectItem key={i} project={project} i={i} selectItem={selectItem} />
          ))}
        </ul>
      )}
    </div>
  );
}


export function ProjectItem({ project, i, selectItem }) {
  const isActive = project.category === selectItem;
  return (
    <li className={`project-item ${isActive ? 'active-project' : ''}`}>
      <a href={project.github}>
        <div className="project-img">
          <div className="project-item-icon-box">
            <i className="fa-solid fa-eye"></i>
          </div>
          <img src={project.img} alt={project.name} />
        </div>
      </a>
      <div className="project-info">
        <h3>{project.name}</h3>
        <p>{project.category}</p>
        <div className="project-links">
          {project.webLink && (
          <a
            href={project.webLink}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            View 
            <span>
            <i className="fa-solid fa-up-right-from-square fa-fade"></i>
            </span>
            </a>
          )}
        </div>
      </div>
    </li>
  );
}

