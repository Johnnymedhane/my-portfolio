import Section from "../../ui/Section";
import List from "../../ui/List";
import { SkillsItem } from "./SkillsItem";
import type { Skill } from "./SkillsItem";

const skills: Skill[] = [
  {
    name: "React",
    img: "/skill-icons/react.svg",
  },
  {
    name: "JavaScript",
    width: "90",
    img: "/skill-icons/javascript.svg",
  },
  {
    name: "Next.js",
    width: "80",
    img: "/skill-icons/nextjs.svg",
  },
  {
    name: "HTML5",
    width: "85",
    img: "/skill-icons/html5.svg",
  },
  {
    name: "CSS3",
    width: "85",
    img: "/skill-icons/css3.svg",
  },
  {
    name: "Tailwind CSS",
    width: "75",
    img: "/skill-icons/tailwind.svg",
  },
  {
    name: "Styled Components",
    img: "/skill-icons/styled-components-1.svg",
  },
  {
    name: "React Query",
    width: "75",
    img: "/skill-icons/react-query.svg",
  },
  {
    name: "Redux Toolkit",
    width: "70",
    img: "/skill-icons/redux.svg",
  },
  {
    name: "Node.js",
    width: "70",
    img: "/skill-icons/node-js-icon.svg",
  },
  {
    name: "Express.js",
    width: "65",
    img: "/skill-icons/express.svg",
    className: "express-logo",
  },
  {
    name: "Supabase",
    img: "/skill-icons/supabase.svg",
  },
  {
    name: "MongoDB",
    img: "/skill-icons/mongodb.svg",
  },
  {
    name: "Git",
    img: "/skill-icons/git.svg",
  },
  {
    name: "GitHub",
    img: "/skill-icons/github-white.svg",
  },
];

export function Skills() {
  return (
    <Section title="Skills" sectionType="skills">
      <List
        item="skills"
        data={skills}
        renderItem={(skill, i) => (
          <SkillsItem key={skill.name} skill={skill} i={i} />
        )}
      />
    </Section>
  );
}
