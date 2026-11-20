import styles from "../../components/myStoryContainer/myStory.module.css";
import { Hero } from "../../components/myStoryContainer/Hero";
import { Timeline } from "../../components/myStoryContainer/Timeline";
import { Values } from "../../components/myStoryContainer/Values";

export const metadata = { title: "My Story" };

export default function MyStoryPage() {
  return (
    <div>
      <div id="mystory">
        <div className={styles.mystoryContainer}>
          <Hero />
          <Timeline />
          <Values />
          {/* <ContactMe /> */}
        </div>
      </div>
    </div>
  );
}

function ContactMe() {
  return (
    <div className={styles.endStory}>
      <p className={styles.closingStatement}>
        This is where my story has brought me, but it&apos;s far from over. If
        it resonates with you, or you&apos;d like to build something together,
        I&apos;d love to hear from you.
      </p>
      <p>
        Reach me at{" "}
        <a href="mailto:johnnymedhane@gmail.com" className={styles.link}>
          johnnymedhane@gmail.com
        </a>
        .
      </p>
    </div>
  );
}
