import { useEffect, useState } from "react";
import { Loading } from "./Loading";

import calculator from './images/calculator2.png';
import uppopcorn from './images/movies.png';
import bill from './images/bill-split.png';
import pizza from './images/pizza-image.png';
import river from './images/river-puzzle.png';
import todo from './images/to-do-list.png';
import spotify from './images/python-spotify.png';
import analist from './images/data-analist.png';
import saving from './images/saving-planer.png';
import rateRe from './images/rate-res.png';
import stpSaving from './images/stp saving-planer.png';
// import stpCalculator from './images/stp-calculator.png';
import screenManagemant from './images/screen-manage.png';

const projects = [
  { name: 'Management Screen STD', category: 'QA', img:screenManagemant, webLink: '', github: 'https://github.com/Johnnymedhane/QA_Projects_Exercises/blob/main/QA-KMS-%20STD.docx' },
  { name: 'RateRes STD', category: 'QA', img: rateRe, webLink: '', github: 'https://github.com/Johnnymedhane/QA_Projects_Exercises/blob/main/std%20RateRes.docx' },
  { name: 'Saving-planer STP', category: 'QA', img: stpSaving, webLink: '', github: 'https://github.com/Johnnymedhane/Saving-Planer/blob/main/QA/STP-Save%20Planer.docx' },
  { name: 'Spotify-Dataset', category: 'Python data-analist', img: spotify, webLink: '', github: 'https://github.com/Johnnymedhane/Python-projects-and-exercises/blob/main/Project_spotifay.dataset.ipynb' },
  { name: 'Dtaset analysis', category: 'Python data-analist', img: analist,  github: 'https://github.com/Johnnymedhane/Python-projects-and-exercises/blob/main/Chipotle/Exercise_with_Solutions.ipynb' },
  { name: 'Saving-Planer', category: 'Web development', img: saving, webLink: 'https://app.netlify.com/teams/johnnymedhane', github: 'https://github.com/Johnnymedhane/Saving-Planer' },
  { name: 'eat-n-split', category: 'Web development', img: bill, webLink: 'https://app.netlify.com/teams/johnnymedhane', github: 'https://github.com/Johnnymedhane/06-eat-n-split' },
  { name: 'Travel-List', category: 'Web development', img: todo, webLink: 'https://dazzling-tulumba-2334c5.netlify.app/', github: 'https://github.com/Johnnymedhane/Travel-List' },
  { name: 'River-Puzzle', category: 'Web development', img: river, webLink: ' https://johnnymedhane.github.io/river-puzzle/', github: 'https://github.com/Johnnymedhane/river-puzzle' },
  { name: 'Pizza-page', category: 'Web development', img: pizza, webLink: 'strong-trifle-c1690d.netlify.app', github: 'https://github.com/Johnnymedhane/Pizza-page' },
  { name: 'PopCorn', category: 'Web development', img: uppopcorn, webLink: 'https://johnnymedhane.github.io/usePopCorn/', github: 'https://github.com/Johnnymedhane/usePopCorn' },
  { name: 'Calculator', category: 'Web development', img: calculator, webLink: 'myclculatorproject.netlify.app', github: 'https://github.com/Johnnymedhane/Calculator' },
];









export function Projects() {
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

