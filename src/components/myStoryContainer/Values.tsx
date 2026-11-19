import styles from "./myStory.module.css";

interface Trait {
  title: string;
  text: string;
}

const traits: Trait[] = [
  {
    title: "Resilience",
    text: "Progress isn't always visible. Sometimes it's simply showing up and continuing when things are difficult.",
  },
  {
    title: "Discipline",
    text: "I've learned that consistency matters more than motivation. Small steps, repeated over time, can change the direction of your life.",
  },
  {
    title: "Empathy",
    text: "Having experienced uncertainty and difficult circumstances, I understand how important it is to create opportunities and support people who are trying to build a better future.",
  },
  {
    title: "Curiosity",
    text: "I don't believe learning ends when you get a job or master a technology. There's always something new to understand, improve, or explore.",
  },
];

export function Values() {
  return (
    <div className={styles.valuesContainer}>
      <h2 className={styles.h2Title}>Lessons from the Road</h2>

      <ul className={styles.valuesList}>
        {traits.map((trait) => (
          <li key={trait.title}>
            <h3>{trait.title}</h3>
            <p className={styles.valueText}>{trait.text}</p>
          </li>
        ))}
      </ul>

      <p className={styles.valuesClosing}>
        These aren&apos;t just qualities I put on a CV. They&apos;re lessons
        I&apos;ve developed through experience.
      </p>
    </div>
  );
}
