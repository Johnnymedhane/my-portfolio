import Section from "../../ui/Section";
import { Timeline } from "./Timeline";



export function Resume() {
  const educationList = [
    {
      name: 'Online Programming Courses (Self-Taught)',
      year: '2024 - current',
      description: 'front-end development',
      children: <p className="timeline-text">I have learned the process of Web development: coding, designing, testing, and debugging.   </p>
    },
    {
      name: 'ARDC community (Tel Aviv)',
      year: '2024- 2024',
      description: 'BFF (Bloomberg Finance Fundamentals)',
      children: <p className="timeline-text">An introduction to the key concepts involved in finance and investment.</p>
    },
    {
      name: 'ARDC community (Tel Aviv)',
      year: '2022- 2022',
      description: 'Python and Data Analysis Course',
      children: <p className="timeline-text">Completed a comprehensive course on Python and Data Analysis.</p>
    },
    {
      name: 'The SVCollege',
      year: '2020 - 2021',
      description: 'software testing (QA) course',
      children: <p className="timeline-text">Graduated professional and practical Software Testing</p>
    },
   
  ];

  const experienceList = [
  
    {
      name: "Front-end Developer",
      year: '2024 - current',
      description: 'Self-Directed Projects',
      children: <p className="timeline-text">Developing and maintaining real web applications and practicing modern frontend development with a focus on React.
        <br />
        <span>Built and deployed 20+ responsive React projects</span>
      </p> 
    },

    {
      name: 'freelancer QA Tester',
      year: '2021 - current',
      description: 'UTest',
      children: <p className="timeline-text">conducting manual tests on various
        products on mobile and web. </p>
    },
    {
      name: 'kitchen manager',
      year: '2018 - 2021',
      description: 'BIGA coffee shop',
      children: <p className="timeline-text">Managed kitchen operations and staff at BIGA coffee shop.</p>
    },
  ];

  return (
   
      <Section title="Resume" sectionType="resume">
       

          <Timeline title="Education" list={educationList} icon="fa-book-open" />

          <Timeline title="Experience" list={experienceList} icon="fa-briefcase" />

      </Section>
    
  );
}


