import { Link } from "react-router-dom";
import { ContactMe } from "./ContactMe";
import { Service } from "./Service";
import { Benefits } from "./Benefits";
import Section from "../../ui/Section";
import Text from "../../ui/Text";

// import { Link } from 'react-router-dom';
export const values = [
  {
    title: "Advanced React Development",
    text: `Skilled in building modern React applications using hooks, React Router, React Query, Context API, Redux, and reusable component patterns. I focus on clean structure, maintainability, and scalable frontend architecture.`,
  },
  {
    title: "Full-Stack Capable",
    text: `I can build complete features from database to UI using Supabase, PostgreSQL, authentication, Node.js, Express.js, and REST APIs. I understand how frontend and backend systems connect in real-world applications.`,
  },
  {
    title: "Performance-Focused",
    text: `Experienced in improving React performance through code splitting, lazy loading, memoization, optimized rendering, and better state management. I care about fast load times and smooth user interactions.`,
  },
  {
    title: "Quality-Driven Mindset",
    text: `My QA background helps me think beyond writing code. I test carefully, debug effectively, and build reliable features with attention to edge cases, user experience, and production readiness.`,
  },
  {
    title: "Modern UI & Styling",
    text: `Comfortable working with CSS Modules, Tailwind CSS, Styled Components, responsive layouts, dark/light modes, and accessible UI patterns. I aim to create interfaces that are clean, usable, and visually polished.`,
  },
  {
    title: "Self-Taught & Consistent",
    text: `I taught myself frontend development while working full-time, completing many real projects and continuously improving through practice, problem-solving, and hands-on learning.`,
  },
  {
    title: "Strong Problem Solver",
    text: `I break complex problems into clear steps and work through them with patience and focus. Whether it’s UI logic, API issues, authentication, or performance bugs, I stay committed until I find a solution.`,
  },
  {
    title: "Team-Ready Communicator",
    text: `I communicate clearly, ask thoughtful questions, and enjoy working with others. My QA and freelance experience helped me collaborate with people from different backgrounds and understand product needs.`,
  },
  {
    title: "Resilient & Mission-Driven",
    text: `My journey has built strong resilience, discipline, and adaptability. I bring purpose, persistence, and a deep motivation to grow, contribute, and create meaningful work through technology.`,
  },
];

export function About() {
  return (
    <Section title="About Me" sectionType="about">
      <Text content="about" className="about-text">
        <p>
          Hello, I'm <span>Johnny Medhane</span> — a self-taught Frontend
          Developer focused on building responsive, accessible, and
          user-friendly web applications.
        </p>
        <p>
          I work mainly with <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>,{" "}
          <b>React</b>, and <b>Python</b>, and I’m continuously improving my
          skills through real-world projects, problem-solving, and hands-on
          learning.
        </p>

        <p>
          Programming is both a creative outlet and a discipline for me. I enjoy
          the full development process — planning, designing, coding, debugging,
          testing, and improving the user experience.
        </p>
        <p>
          My journey has taught me how to learn effectively, stay disciplined,
          research deeply, and solve problems under pressure. I don’t panic when
          facing new technologies — I break things down, learn what I need, and
          keep moving forward.
        </p>

        <p>
          I invite you to explore my projects and resume. If you’re looking for
          a dedicated developer who learns fast, solves problems, and builds
          with care, feel free to reach out.
          <Link className="link-my-story" to="/my-story">
            Read my story &rarr;
          </Link>
        </p>
      </Text>

      <Service />
      <Benefits values={values} />
      <ContactMe />
    </Section>
  );
}
