import { useAppContext } from "../../contexts/contextApi";
import "./skills.css";
import { motion } from "framer-motion";

export function SkillsItem({ skill, i }) {
  const { isDarkMode } = useAppContext();

  const imgSrc =
    skill.name === "GitHub"
      ? isDarkMode
        ? "/skill-icons/github-white.svg"
        : "/skill-icons/github.svg"
      : skill.img;

  return (
    <motion.li
      layout
      className="skills-item"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
      transition={{
        layout: { duration: 0.8, ease: "easeInOut" },
        y: {
          duration: 3 + i * 0.15,
          repeat: Infinity,
          ease: "easeInOut",
        },
      }}
      whileHover={{ scale: 1.08, y: -10 }}
    >
      <img className="skill-icon" src={imgSrc} alt={`${skill.name} logo`} />
      <h3>{skill.name}</h3>
    </motion.li>
  );
}
