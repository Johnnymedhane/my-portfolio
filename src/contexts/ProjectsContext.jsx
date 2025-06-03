

import { createContext, useContext, useState, useEffect } from 'react';


const ProjectsContext = createContext();


const projects = [
  { name: 'Management Screen STD', category: 'QA', img: `${process.env.PUBLIC_URL}/images/screen-manage.png`, webLink: '', github: 'https://github.com/Johnnymedhane/QA_Projects_Exercises/blob/main/QA-KMS-%20STD.docx' },
{ name: 'RateRes STD', category: 'QA', img: `${process.env.PUBLIC_URL}/images/rate-res.png`, webLink: '', github: 'https://github.com/Johnnymedhane/QA_Projects_Exercises/blob/main/std%20RateRes.docx' },
{ name: 'Saving-planer STP', category: 'QA', img: `${process.env.PUBLIC_URL}/images/stp saving-planer.png`, webLink: '', github: 'https://github.com/Johnnymedhane/Saving-Planer/blob/main/QA/STP-Save%20Planer.docx' },
{ name: 'Spotify-Dataset', category: 'Python data-analist', img: `${process.env.PUBLIC_URL}/images/python-spotify.png`, webLink: '', github: 'https://github.com/Johnnymedhane/Python-projects-and-exercises/blob/main/Project_spotifay.dataset.ipynb' },
{ name: 'Dtaset analysis', category: 'Python data-analist', img: `${process.env.PUBLIC_URL}/images/data-analist.png`, github: 'https://github.com/Johnnymedhane/Python-projects-and-exercises/blob/main/Chipotle/Exercise_with_Solutions.ipynb' },
{ name: 'Calculator', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/calculator2.png`, webLink: 'https://myclculatorproject.netlify.app', github: 'https://github.com/Johnnymedhane/Calculator' },
{ name: 'Pizza-page', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/pizza-image.png`, webLink: 'https://strong-trifle-c1690d.netlify.app', github: 'https://github.com/Johnnymedhane/Pizza-page' },
{ name: 'River-Puzzle', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/river-puzzle.png`, webLink: 'https://johnnymedhane.github.io/river-puzzle/', github: 'https://github.com/Johnnymedhane/river-puzzle' },
{ name: 'Worldwise', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/worldwise.png`, webLink: 'https://world-wise-cities.netlify.app/', github: 'https://github.com/Johnnymedhane/World-Wise' },
{ name: 'React-quizs', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/quizs.png`, webLink: 'https://react-quizss.netlify.app', github: 'https://github.com/Johnnymedhane/React-Quizs' },
{ name: 'PopCorn', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/movies.png`, webLink: 'https://johnnymedhane.github.io/usePopCorn/', github: 'https://github.com/Johnnymedhane/usePopCorn' },
{ name: 'Saving-Planer', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/saving-planer.png`, webLink: 'https://app.netlify.com/teams/johnnymedhane', github: 'https://github.com/Johnnymedhane/Saving-Planer' },
{ name: 'eat-n-split', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/bill-split.png`, webLink: 'https://app.netlify.com/teams/johnnymedhane', github: 'https://github.com/Johnnymedhane/06-eat-n-split' },
{ name: 'Travel-List', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/to-do-list.png`, webLink: 'https://dazzling-tulumba-2334c5.netlify.app/', github: 'https://github.com/Johnnymedhane/Travel-List' },
{ name: 'Classy-Weather', category: 'Web development', img: `${process.env.PUBLIC_URL}/images/classy-weather.png`, webLink: 'https://johnnymedhane.github.io/classy-weather/', github: 'https://github.com/Johnnymedhane/classy-weather' },

];




 const ProjectsProvider = ({ children }) => {
    const projectsCategory = ['All', 'Web development', 'Python data-analist', 'QA'];
     const [selectItem, setSelectItem] = useState('');
     const [showList, setShowList] = useState(true);
     const [projectsList, setProjectsList] = useState(projects.slice(8));
     const [isLoading, setIsLoading] = useState(false);

   
     function handleSelectProject(project) {
       setSelectItem(project);
       setShowList(true);
     }
    
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
        }, [selectItem]);
      


    return (
        <ProjectsContext.Provider value={{
            projectsCategory,
            selectItem,
            setSelectItem,
            showList,
            setShowList,
        handleSelectProject,
            projectsList,
            isLoading,
    

            // Initial projects to display
        }}>
            {children}
        </ProjectsContext.Provider>
    );
};

 const useProjects = () => {
    const context = useContext(ProjectsContext);
    if (!context) {
        throw new Error('useProjects must be used within a ProjectsProvider');
    }
    return context;
};
export { ProjectsProvider, useProjects };

