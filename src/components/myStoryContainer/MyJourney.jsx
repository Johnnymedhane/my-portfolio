import styles from "../../pages/myStory.module.css";

export function MyJourney() {
    return (
        <div className={styles.journeyContainer}>
            <h2 className={styles.h2Title}>My Journey Into Tech</h2>
            <div className={styles.journeyContent}>
                <p>
                   My journey hasn't been
                    simple, but it has shaped me into a determined and hardworking
                    individual ready to contribute meaningfully to the tech world.
                </p>

                <p>
                     I faced countless
                    challenges—periods of instability, difficult decisions, and moments
                    of doubt. But these struggles became the foundation for my personal growth.
                </p>
                   
                <p>
                    In 2020, I decided to transform my life. I began my journey in software testing by
                    completing a QA course and gaining hands-on experience as a freelance tester at uTest,
                    where I worked on web and mobile applications for two years. Along the way,
                    I honed my skills in:

                    <span>Writing documentation (STP, STD, SRS, Test Cases, Bug Reports)</span>
                    <span>Understanding testing methodologies, types, and processes</span>
                    <span>SQL (join-level proficiency).</span>
                </p>

                <p>
                    I later expanded my skills to Frontend Development, learning HTML, CSS, JavaScript, React,
                    and Python through self-study.
                    You can view my projects here: <a href="https://github.com/Johnnymedhane?tab=repositories" className={styles.link}> My
                        GitHub.</a>
                </p>

                <p>
                    Beyond my tech journey, I've worked for six years as a cook and kitchen
                    manager, where I developed leadership, problem-solving,
                    and organizational skills that I carry into every aspect of my life.
            </p>
            </div>
        </div>
    )
}