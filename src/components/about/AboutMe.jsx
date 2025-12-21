import { Link } from "react-router-dom";
import { ContactMe } from "./ContactMe";
import { Service } from "./Service";
import { Benefits } from "./Benefits";
import Section from "../../ui/Section";
import Text from "../../ui/Text";

// import { Link } from 'react-router-dom';
export const values = [
  {
    title: "Advanced React Ecosystem Skills",
    text: `Proficient in React with advanced patterns (Compound Components, Render Props), React Query for server state, React Router v6 (loaders/actions), Redux, Context API, and performance optimization techniques. Built 20+ production-ready applications.`,
  },
  {
    title: "Full-Stack Capable",
    text: `Beyond frontend, I work with Supabase (authentication, real-time DB, PostgreSQL), Node.js, Express.js, and RESTful APIs. I understand how data flows from backend to UI and can build complete features independently.`,
  },
  {
    title: "Quality-Focused Developer",
    text: `My QA background ensures I write clean   and maintainable code. Experienced with Chrome DevTools, React DevTools, Redux DevTools, and React Profiler. I catch bugs before they reach production.`,
  },
  {
    title: "Performance & Optimization Expert",
    text: `Experienced in optimizing React apps through code-splitting, lazy loading, React.memo, useMemo/useCallback. I reduce bundle sizes, improve load times, and ensure smooth  interactions.`,
  },
  {
    title: "Modern Styling & Design Systems",
    text: `Comfortable  with multiple styling approaches: Tailwind CSS, Styled Components, and CSS Modules. I build responsive, accessible UIs with dark/light theming, and understand design principles using Figma.`,
  },
  {
    title: "Proven Self-Learner with Real Output",
    text: `Independently mastered the React ecosystem in under 12 months while working full-time. Delivered 20+ deployed projects demonstrating rapid learning, strong execution, and real-world problem solving.`,
  },
  {
    title: "Strong Problem-Solving Skills",
    text: `Analytical thinker who breaks complex challenges into clear, manageable steps. Whether dealing with performance bottlenecks, API issues, or complex state logic, I deliver efficient and reliable solutions.`,
  },
  {
    title: "Collaboration & Team Readiness",
    text: `Experience working with distributed teams through QA projects and open-source contributions across 10+ countries. Clear communicator who bridges technical and non-technical perspectives.`,
  },
  {
    title: "Resilient & Mission-Driven",
    text: `As an Eritrean asylum seeker building a career in Israel’s tech industry, I bring resilience, adaptability, and a strong sense of purpose. I value growth, impact, and meaningful contribution.`,
  },
  {
    title: "Discipline & Persistence",
    text: `Highly disciplined and goal-oriented. I plan clearly, stay committed through challenges, and complete what I start. I don’t stop when things get difficult—I push through until the job is done.`,
  },
];

export function About() {
  return (
    <Section title="About Me" sectionType="about">
      <Text content="about" className="about-text">
        <p>
          Hello, I'm <span> Johnny Medhane</span> — a self-taught Front-end
          Developer with a passion for building beautiful, responsive, and
          user-friendly websites. I have a solid foundation in
          <b> HTML, </b> <b> CSS, </b> <b> JavaScript, </b> <b> React, </b> and
          <b> Python </b>
          and I'm constantly exploring new technologies to sharpen my skills and
          stay up-to-date.
        </p>
        <p>
          Programming is a creative outlet and a source of inspiration for me. I
          enjoy every part of the development process — Designing, Coding,
          debugging, testing, and exploring new solutions.
        </p>
        <p>
          Through my coding journey, I've learned more than just programming —
          I've mastered:
          <>
            <strong> how to learn effectively </strong>,
            <strong> developed strong self-discipline </strong>,
            <strong>enhanced my research skills </strong>,
            <strong>
              and become highly effective at problem-solving under pressure.
            </strong>{" "}
            Coding has actually taught me that happiness comes from solving
            problems!
          </>
        </p>
        <p>
          When I encounter new technologies, I don't panic — I'm confident in my
          ability to figure things out and adapt quickly.
        </p>
        <p>
          {" "}
          I invite you to take a look at my projects and resume - and if you're
          curious or want to collaborate, feel free to reach out. I'd love to
          connect!
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
