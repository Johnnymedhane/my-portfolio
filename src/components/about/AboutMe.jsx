import { Link } from "react-router-dom";
import { ContactMe } from "./ContactMe";
import { Service } from "./Service";
import { Benefits } from "./Benefits";
import Section from "../../ui/Section";
import Text from "../../ui/Text";

// import { Link } from 'react-router-dom';
export const values = [
  {
    title: "React & Next.js Development",
    text: `I build fast, scalable applications with React and Next.js, structuring them around reusable components, custom hooks and clear state management so they stay easy to maintain as they grow.`,
  },
  {
    title: "Full-Stack Capable",
    text: `I build complete features from database to UI with Supabase, PostgreSQL, Node.js, Express and REST APIs, including authentication and payment integrations.`,
  },
  {
    title: "Performance-Focused",
    text: `I improve React performance through code splitting, lazy loading, memoization and smarter state management, aiming for fast load times and smooth interactions.`,
  },
  {
    title: "Quality-Driven Mindset",
    text: `My QA background shapes how I build. I test carefully, think about edge cases early and ship reliable features with the user experience in mind.`,
  },
  {
    title: "Modern UI & Styling",
    text: `I work with Tailwind CSS, CSS Modules and Styled Components to build responsive, accessible interfaces, including dark and light modes.`,
  },
  {
    title: "AI-Assisted Development",
    text: `I use Claude Code, GitHub Copilot and ChatGPT to speed up development, debugging and code review, while owning the architecture and quality of the code I ship.`,
  },
  {
    title: "Fast Learner & Problem Solver",
    text: `I taught myself development while working full-time. I break complex problems into clear steps, learn what I need and stay with an issue until it's solved.`,
  },
  {
    title: "Team-Ready Communicator",
    text: `I communicate clearly, ask good questions and collaborate through Git and GitHub workflows in an active product team.`,
  },
];

export function About() {
  return (
    <Section title="About Me" sectionType="about">
      <Text content="about" className="about-text">
        <p>
          I'm <span>Johnny Medhane</span> — a self-taught Frontend &
          Full-Stack Developer specializing in <b>React</b> and{" "}
          <b>Next.js</b>, with 20+ web applications built and deployed.
        </p>
        <p>
          I build more than interfaces. I enjoy understanding how an
          application works as a whole — from its architecture and database
          to authentication, APIs, user interactions, and deployment.
          My focus is on writing maintainable code and creating responsive,
          reliable applications that solve real problems.
        </p>

        <p>
          My path into technology wasn't traditional. I taught myself
          development while working full-time, using online courses,
          documentation, experimentation, and real projects to build
          my skills. My previous experience in QA also shaped how I
          approach software: thinking about edge cases, investigating
          problems, and paying attention to the details that make
          applications reliable.
        </p>

        <p>
          Explore my projects and resume, or{" "}
          <Link className="link-my-story" to="/my-story">
            read my story &rarr;
          </Link>
          {" "}to learn more about the journey behind my work.
        </p>
      </Text>

      <Service />
      <Benefits values={values} />
      <ContactMe />
    </Section>
  );
}
