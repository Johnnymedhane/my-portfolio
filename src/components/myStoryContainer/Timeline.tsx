import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./myStory.module.css";

interface TimelineEntry {
  title: string;
  img: string;
  paragraphs: ReactNode[];
}

const entries: TimelineEntry[] = [
  {
    title: "Where My Journey Began",
    img: "/images/rasta-img.png",
    paragraphs: [
      <>
        I was born in{" "}
        <a
          href="https://en.wikipedia.org/wiki/Eritrea"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Learn more about Eritrea on Wikipedia"
        >
          Eritrea.
        </a>{" "}
        At just 14 years old, I was forced into exile. In 2010, I left Eritrea
        and crossed the border into Ethiopia with some of my friends. I spent
        the next year there, trying to find my way in an unfamiliar place, far
        away from home.
      </>,
      <>
        After a year in Ethiopia, I continued my journey to Sudan. Getting there
        took 12 days on foot. From Sudan, I travelled towards Israel, crossing
        through the desert, Egypt, and the Sinai Peninsula. Eventually, in 2012,
        I arrived in Israel.
      </>,
      <>
        But leaving Eritrea meant leaving much more than my country behind. I
        left my family, my home, and the life I had known. Since that day, I
        have never seen my family again. More than a decade has passed, and that
        separation remains one of the most difficult parts of my life.
      </>,
      <>
        At 14, I couldn't have imagined everything that lay ahead of me or how
        profoundly those experiences would shape the person I would become. I
        had to grow up, adapt to unfamiliar surroundings, and find my way
        through a world I was still learning to understand.
      </>,
      <>
        I don't share this for sympathy. It's an important part of who I am and
        the journey that brought me here. It shaped how I see life, taught me to
        value human connection, appreciate opportunities, and keep moving
        forward even when life doesn't unfold the way you imagined.
      </>,
    ],
  },

  {
    title: "Discovering a New Direction",
    img: "",
    paragraphs: [
      <>
        In 2021, I decided I wanted something different for my future. I
        didn&apos;t have a bachelor's degree in computer science or a
        traditional background in technology, but I had curiosity and a
        willingness to learn.
      </>,
      <>
        I started with software testing. I completed a QA course and eventually
        gained practical experience as a freelance tester at{" "}
        <a
          href="https://www.utest.com/ref947881"
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit UTest website"
        >
          uTest
        </a>
        , working with web and mobile applications.
      </>,
      <>
        That experience introduced me to how software works, how products are
        built, and how important quality is in creating a good user experience.
      </>,
      <>
        But I wanted to understand more. I didn&apos;t just want to test what
        others created. I wanted to build things myself.
      </>,
      <>That&apos;s when I discovered frontend development.</>,
      <>
        I started learning HTML, CSS, and JavaScript, eventually moving into
        React, Next.js and Node.js. Most of my learning happened independently,
        through documentation, online courses, experimentation, and building
        projects.
      </>,
      <>
        It wasn&apos;t always easy. I was working long hours in kitchens while
        trying to develop a completely new career. There were days when I came
        home exhausted, but I continued learning, sometimes waking up early just
        to get a few hours of coding practice in before work.
      </>,
      <>
        Slowly, the things I once found difficult became things I could build.
      </>,
      <>What started as curiosity became a profession I genuinely enjoy.</>,
    ],
  },
  {
    title: "From Learning to Building",
    img: "",
    paragraphs: [
      <>
        I eventually moved beyond tutorials and started building real
        applications.
      </>,
      <>
        Since then, I&apos;ve built and deployed more than 20 web applications,
        worked on client projects, and gained hands-on experience with
        technologies such as React, Next.js, JavaScript, Node.js, and Supabase.
       
      </>,
      <>
        I&apos;ve learned that software development is about much more than
        writing code. It&apos;s about understanding people, identifying
        problems, making thoughtful decisions, and creating solutions that are
        genuinely useful.
      </>,
      <>
        I&apos;m proud of how far I&apos;ve come, but I see every project as
        another opportunity to learn, improve, and build something better.
      </>,
    ],
  },
];

export function Timeline() {
  return (
    <div className={styles.timelineContainer}>
      {entries.map((entry, index) => (
        <div
          key={entry.title}
          className={`${styles.timelineEntry} ${
            index % 2 === 1 ? styles.timelineEntryReversed : ""
          }`}
        >

          <div className={styles.timelineText}>
            <h2 className={styles.h2Title}>{entry.title}</h2>
            {entry.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex}>{paragraph}</p>
            ))}
          </div>
          <div className={styles.timelineImage}>
            {entry.img ? (
              <Image
                src={entry.img}
                alt={entry.title}
                fill
                className={styles.timelineImg}
              />
            ) : (
              <span className={styles.timelineImagePlaceholder}>
                Photo coming soon
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
