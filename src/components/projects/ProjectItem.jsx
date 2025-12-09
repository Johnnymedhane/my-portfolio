import { useProjects } from "../../contexts/ProjectsContext";

export function ProjectItem({ project }) {
  const { selectItem } = useProjects();
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
