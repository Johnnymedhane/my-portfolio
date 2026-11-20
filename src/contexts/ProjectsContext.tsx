"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import type { ReactNode } from "react";
import type { Project } from "../types/project";
import type { ProjectsContextValue } from "../types/context";

const ProjectsContext = createContext<ProjectsContextValue | undefined>(
  undefined,
);

const projects: Project[] = [
  {
    name: "SnipSlot",
    category: "Full-Stack development",
    img: "/images/snipslot.png",
    webLink: "https://www.snipslot.co",
    github: null,
  },

  {
    name: "Mila",
    category: "Frontend development",
    img: "/images/mila.png",
    webLink: "https://www.app.milaassist.com/",
    github: null,
  },

  {
    name: "Anibinge",
    category: "Full-Stack development",
    img: "/images/anibinge.png",
    webLink: "https://anibinge.com/",
    github: null,
  },

  {
    name: "the-wild-oasis-external",
    category: "Full-Stack development",
    img: "/images/the-wild-oasis-external.png",
    webLink: "https://the-wild-oasis-website-sand-eight.vercel.app/",
    github: "https://github.com/Johnnymedhane/the-wild-oasis-website",
  },
  {
    name: "the-wild-oasis-internal",
    category: "Full-Stack development",
    img: "/images/the-wild-oasis.png",
    webLink: "https://the-wild-oasis-jme.netlify.app/",
    github: "https://github.com/Johnnymedhane/the-wild-oasis-internal",
  },

  {
    name: "primeTech",
    category: "Frontend development",
    img: "/images/primeTech.png",
    webLink: "https://primete.netlify.app/",
    github: "https://github.com/Johnnymedhane/primeTech",
  },

  {
    name: "fast-pizza",
    category: "Frontend development",
    img: "/images/fast-pizza.png",
    webLink: "https://fast-pizza-deli.netlify.app",
    github: "https://github.com/Johnnymedhane/Fast-React-Pizza",
  },

  {
    name: "Pizza-page",
    category: "Frontend development",
    img: "/images/pizza-image.png",
    webLink: "https://strong-trifle-c1690d.netlify.app",
    github: "https://github.com/Johnnymedhane/Pizza-page",
  },

  {
    name: "Worldwise",
    category: "Full-Stack development",
    img: "/images/worldwise.png",
    webLink: "https://world-wise-cities.netlify.app/",
    github: "https://github.com/Johnnymedhane/World-Wise",
  },

  {
    name: "React-quizs",
    category: "Frontend development",
    img: "/images/quizs.png",
    webLink: "https://react-quizss.netlify.app",
    github: "https://github.com/Johnnymedhane/React-Quizs",
  },

  {
    name: "PopCorn",
    category: "Frontend development",
    img: "/images/movies.png",
    webLink: "https://johnnymedhane.github.io/usePopCorn/",
    github: "https://github.com/Johnnymedhane/usePopCorn",
  },

  {
    name: "Workout Timer",
    category: "Frontend development",
    img: "/images/work-out.png",
    webLink: "https://workouts-timer.netlify.app/",
    github: "https://github.com/Johnnymedhane/workout-timer",
  },

  {
    name: "Job Tracker",
    category: "Full-Stack development",
    img: "/images/job-tracker.png",
    webLink: "https://track-your-jobs.netlify.app/",
    github: "https://github.com/Johnnymedhane/job-tracker/tree/main",
  },

  {
    name: "Redux-Bank",
    category: "Frontend development",
    img: "/images/redux-bank.png",
    webLink: " https://johnnymedhane.github.io/react-redux-bank/",
    github: "https://github.com/Johnnymedhane/react-redux-bank",
  },

  {
    name: "Calculator",
    category: "Frontend development",
    img: "/images/calculator2.png",
    webLink: "https://myclculatorproject.netlify.app",
    github: "https://github.com/Johnnymedhane/Calculator",
  },

  {
    name: "River-Puzzle",
    category: "Frontend development",
    img: "/images/river-puzzle.png",
    webLink: "https://johnnymedhane.github.io/river-puzzle/",
    github: "https://github.com/Johnnymedhane/river-puzzle",
  },

  {
    name: "Saving-Planer",
    category: "Frontend development",
    img: "/images/saving-planer.png",
    webLink: "https://app.netlify.com/teams/johnnymedhane",
    github: "https://github.com/Johnnymedhane/Saving-Planer",
  },

  {
    name: "eat-n-split",
    category: "Frontend development",
    img: "/images/bill-split.png",
    webLink: "https://app.netlify.com/teams/johnnymedhane",
    github: "https://github.com/Johnnymedhane/06-eat-n-split",
  },

  {
    name: "Travel-List",
    category: "Frontend development",
    img: "/images/to-do-list.png",
    webLink: "https://dazzling-tulumba-2334c5.netlify.app/",
    github: "https://github.com/Johnnymedhane/Travel-List",
  },

  {
    name: "Classy-Weather",
    category: "Frontend development",
    img: "/images/classy-weather.png",
    webLink: "https://johnnymedhane.github.io/classy-weather/",
    github: "https://github.com/Johnnymedhane/classy-weather",
  },

  {
    name: "RateRes STD",
    category: "QA",
    img: "/images/rate-res.png",
    webLink: "",
    github:
      "https://github.com/Johnnymedhane/QA_Projects_Exercises/blob/main/std%20RateRes.docx",
  },

  {
    name: "Saving-planer STP",
    category: "QA",
    img: "/images/stp saving-planer.png",
    webLink: "",
    github:
      "https://github.com/Johnnymedhane/Saving-Planer/blob/main/QA/STP-Save%20Planer.docx",
  },

  {
    name: "Management Screen STD",
    category: "QA",
    img: "/images/screen-manage.png",
    webLink: "",
    github:
      "https://github.com/Johnnymedhane/QA_Projects_Exercises/blob/main/QA-KMS-%20STD.docx",
  },

  {
    name: "Spotify-Dataset",
    category: "Python data-analist",
    img: "/images/python-spotify.png",
    webLink: "",
    github:
      "https://github.com/Johnnymedhane/Python-projects-and-exercises/blob/main/Project_spotifay.dataset.ipynb",
  },

  {
    name: "Dtaset analysis",
    category: "Python data-analist",
    img: "/images/data-analist.png",
    github:
      "https://github.com/Johnnymedhane/Python-projects-and-exercises/blob/main/Chipotle/Exercise_with_Solutions.ipynb",
  },
];

function ProjectsProvider({ children }: { children: ReactNode }) {
  const projectsCategory = [
    "All",
    "Full-Stack development",
    "Frontend development",
    "Python data-analist",
    "QA",
  ];
  const [selectItem, setSelectItem] = useState("");
  const [showList, setShowList] = useState(false);
  const [projectsList, setProjectsList] = useState<Project[]>(
    projects.slice(0, 10),
  );

  const [isLoading, setIsLoading] = useState(false);

  function handleSelectProject(project: string) {
    setSelectItem(project);
    setShowList((show) => !show);
  }

  const applySelection = useCallback(() => {
    if (selectItem === "All") {
      setProjectsList(projects);
    } else {
      const filteredProjects = projects.filter(
        (project) => project.category === selectItem,
      );
      setProjectsList(filteredProjects);
    }
  }, [selectItem]);

  useEffect(() => {
    if (!selectItem) return;
    setIsLoading(true);
    const timeoutId = setTimeout(() => {
      applySelection();
      setIsLoading(false);
    }, 500); // Simulate a loading delay

    return () => clearTimeout(timeoutId);
  }, [selectItem, applySelection]);

  return (
    <ProjectsContext.Provider
      value={{
        projectsCategory,
        selectItem,
        setSelectItem,
        showList,
        setShowList,
        handleSelectProject,
        projectsList,
        isLoading,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}

function useProjects(): ProjectsContextValue {
  const context = useContext(ProjectsContext);
  if (!context) {
    throw new Error("useProjects must be used within a ProjectsProvider");
  }
  return context;
}
export { ProjectsProvider, useProjects };
