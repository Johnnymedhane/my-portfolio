import styles from "../../pages/myStory.module.css";

export function BackGround() {
    return (
        <div className={styles.backgroundContainer}>
            <div className={styles.backgroundHero}>
                <div className={styles.imageContainer}>
                    <img src={`${process.env.PUBLIC_URL}/images/black-img.png`} alt="my-pic" />
                </div>

                <div className={styles.content}>
                    <h1 className={styles.introTitle}> Johnny Medhane </h1>
                    <p> I am 28 years old. </p>
                    <p> I am originally from <a href="https://en.wikipedia.org/wiki/Eritrea#:~:text=Eritrea%20%28%2F%20%CB%8C%C9%9Br%C9%AA%CB%88tri%CB%90.%C9%99%2C%20-%20%CB%88tre%C9%AA%20-%2F%29%20%28listen%29%2C%20officially,in%20the%20west%2C%20and%20Djibouti%20in%20the%20southeast." className={styles.link}>
                        Eritrea.
                    </a>
                    </p>
                    <p> I was born in Eritrea. </p>
                    <p> I moved to Ethiopia in 2010 and was there for a year. </p>
                    <p> I then came to Israel in 2012, i came through the desert when i was 15 years old. </p>
                    <p> I now live in Petah Tikva.</p>
                    <p> I'm alone here, my family is in eritrea.</p>
                    <p> I'm obsess on going to gym to forget things that makes me worry. </p>
                    <p> I like to cooke and watch moves alot at home. </p>
                    <p> I alwas motivated to learn and develop. </p>
                    <p> I work part time in <a href="https://www.utest.com/ref947881" className={styles.link}>UTest
                    </a> as a freelancer QA Tester.</p>
                    <p> I'm a self-taught Front-end Developer. </p>
                    <p> I have taught myself coding languages <b> CSS, HTML, SQL, JavaScript, React, Python </b> from internet. </p>
                    <p>I'M highly motivatied to learn and develop, not afraid of challenges, naturally inclined towards optimism,
                        attentive, curious, open-minded, responsible, flexible and have a good communcatio.
                    </p>
                </div>
            </div>
        </div>
    )
}