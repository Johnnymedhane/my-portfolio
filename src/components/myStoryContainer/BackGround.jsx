import styles from "../../pages/myStory.module.css";

export function BackGround() {
  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.backgroundHero}>
        <div className={styles.imageContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/images/black-img.png`}
            alt="my-pic"
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.introTitle}> Johnny Medhane </h1>
          <p> I am 29 years old. </p>
          <p>
            {" "}
            I am originally from{" "}
            <a
              href="https://en.wikipedia.org/wiki/Eritrea#:~:text=Eritrea%20%28%2F%20%CB%8C%C9%9Br%C9%AA%CB%88tri%CB%90.%C9%99%2C%20-%20%CB%88tre%C9%AA%20-%2F%29%20%28listen%29%2C%20officially,in%20the%20west%2C%20and%20Djibouti%20in%20the%20southeast."
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Learn more about Eritrea on Wikipedia"
            >
              Eritrea.
            </a>
          </p>
          <p> I was born in Eritrea. </p>
          <p> I moved to Ethiopia in 2010 where I stayed for a year. </p>
          <p>
            {" "}
            I then came to Israel in 2012 through a challenging journey across
            the desert when I was 15 years old.
          </p>
         
          <p> I'm obsessed on going to the gym. </p>
          <p> In my free time, I enjoy cooking and watching movies at home. </p>

          <p>
            {" "}
            I have worked part time in{" "}
            <a
              href="https://www.utest.com/ref947881"
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit UTest website"
            >
              UTest
            </a>{" "}
            as a freelancer QA Tester.
          </p>
          <p>
            I'm a self-taught Front-end Developer who has learned HTML, CSS,
            JavaScript, React, Python, and SQL through online resources and
            dedication.
          </p>
          <p>
            I'm highly motivated to learn and develop, not afraid of challenges,
            naturally inclined towards optimism, attentive, curious,
            open-minded, responsible, flexible and have good communication
            skills.
          </p>
        </div>
      </div>
    </div>
  );
}
