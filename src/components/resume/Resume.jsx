import Section from "../../ui/Section";
import { Timeline } from "./Timeline";



export function Resume() {
  const educationList = [
    {
      name: "Frontend Development",
      year: "2024 - Present",
      description: "Self-Study",
      children: (
        <p className="timeline-text">
          Studying modern frontend development with React, Next.js, JavaScript,
          routing, state management, performance optimization, and responsive
          UI.
        </p>
      ),
    },

    {
      name: "Bloomberg Finance Fundamentals",
      year: "2024",
      description: "ARDC Community, Tel Aviv",
      children: (
        <p className="timeline-text">
          Completed an introduction to financial markets, investing, risk
          management, and portfolio fundamentals.
        </p>
      ),
    },

    {
      name: "Python & Data Analysis",
      year: "2022",
      description: "ARDC Community, Tel Aviv",
      children: (
        <p className="timeline-text">
          Completed a Python and data analysis course using Pandas, NumPy, and
          real-world datasets.
        </p>
      ),
    },

    {
      name: "Manual Software Testing",
      year: "2020",
      description: "SV College",
      children: (
        <p className="timeline-text">
          Completed practical QA training covering STP, STD, STR, SQL basics,
          manual testing, and bug reporting.
        </p>
      ),
    },
  ];

 const experienceList = [
   {
     name: "Frontend Developer",
     year: "2024 - Present",
     description: "Personal & Production Projects",
     children: (
       <p className="timeline-text">
         Building modern web applications with React and Next.js, focusing on
         performance, scalability, and user experience.
         <br />
         <span>Built and deployed 20+ responsive web applications</span>
       </p>
     ),
   },

   {
     name: "Freelance QA Tester",
     year: "2021 - Present",
     description: "uTest",
     children: (
       <p className="timeline-text">
         Conducting functional, regression, and exploratory testing across web
         and mobile applications.
       </p>
     ),
   },

   {
     name: "Kitchen Manager",
     year: "2018 - 2023",
     description: "Biga Coffee Shop",
     children: (
       <p className="timeline-text">
         Managed kitchen operations, staff scheduling, inventory, and workflow
         in a high-pressure environment.
       </p>
     ),
   },
 ];

  return (
   
      <Section title="Resume" sectionType="resume">
       

          <Timeline title="Education" list={educationList} icon="fa-book-open" />

          <Timeline title="Experience" list={experienceList} icon="fa-briefcase" />

      </Section>
    
  );
}


