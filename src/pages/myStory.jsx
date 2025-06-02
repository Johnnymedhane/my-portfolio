import Header from '../components/Header';
import styles from "./myStory.module.css";

const values = [
    { title: 'What Drives Me' ,
        text: `I am motivated to serve as an example for
         other asylum seekers and refugees, showing that
         perseverance and self- belief can lead to success.My ambition is
         to join a team that values growth, innovation, and collaboration.`
    },

    {
        title: 'Some of My Core Values',
        text: [
            {
                title: 'Resilience & Perseverance: ',
                text: `You have faced numerous challenges, from being forced into exile at an 
                    early age(14 years old) to struggling financially and 
                    overcoming difficult personal circumstances. Yet i refused to give up and continuosly worked toward a better future.`
             },
            {
                title: 'Growth & Learning: ', 
                text: ` Despite having no prior tech background I decided to 
                pursue educations in software testing and frontend development. I am eager to learn and grow.`
            },
            {
                 title: 'Ambition & Purpose',
                text: 'I aim not only to succeed for yourself but also to inspire and serve as a prime exmple  for asylum seekers and refugees like me, proving that obstacles can be overcome with determination.'
            },
              {
                title: 'Responsibility & Independence',
                text: 'Since the age of 14, I have taken ownership of my life—setting new goals, working hard to sustain myself, and making conscious decisions to improve my situation without relying on external support.'

            },
              {
                title: 'Empathy & Community',
                text: 'I have faced numerous challenges, from being forced into exile at an early age to struggling financially and overcoming difficult personal circumstances.'

            }

        ]
      
    }
]


export function Mybackground() {
    return (
        <div>
            <Header />
            <section id="mystory" >
        <div className= {styles.mystoryContainer}>
            <BackGround />
            <MyJourney />
            <Values />
            <ContactMe />
            </div>
            </section>
        </div>
    )
}
function BackGround() {
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
                <p> I  was born in Eritrea. </p>
                <p> I moved to Ethiopia in 2010 and was there for a year. </p>
                <p> I then  came to Israel in 2012, i came through the desert when i was 15 years old. </p>
                <p> I now live in Petah Tikva.</p>
                <p> I'm alone here,  my family is in eritrea.</p>
                <p> I'm obsess on going to gym to forget things that makes me worry. </p>
                <p> I  like to cooke and watch moves alot at home. </p>
                <p> I alwas motivated to learn  and develop.  </p>
                <p> I work part time in  <a href="https://www.utest.com/ref947881" className={styles.link}>UTest
                </a>  as a freelancer QA Tester.</p>
                        <p> I'm a self-taught Front-end Developer. </p>
                <p> I have taught myself coding languages <b> CSS, HTML, SQL, JavaScript, React, Python </b> from internet. </p>       
                <p>I'M highly motivatied to learn and develop, not afraid of challenges, naturally inclined towards optimism,
                    attentive, curious, open-minded, responsible, flexible and have a good communcatio.
                </p>
               </div>
            </div>
            </div>
          
    )
} function MyJourney() {
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

function Values() {
    return (
        <div className={styles.valuesContainer}>

            <h2 className={styles.h2Title}>Values</h2>
            <div className={styles.valuesContent}>
                <h3 className={styles.contentTitle}>{values[0].title}</h3>
                <p className={styles.valueText}>{values[0].text}</p>
           </div>

            <div className={styles.valuesContent}>
                <h3 className={styles.contentTitle}>{values[1].title}</h3>
                <ul className={styles.valuesList}>
                    {values[1].text.map((value, index) => (
                        <li key={index}>
                            <h4 >{value.title}</h4>
                            <p className={styles.valueText}>{value.text}</p>
                        </li>
                    ))}

                </ul>

                 
            </div>
            </div>
    )
}

function ContactMe() {
    return (
        <div className={styles.endStory}>
            <p>
                Thank you for reading my story! 
                I'm excited to connect and explore new opportunities together!

                Feel free to reach me <a href="mailto:johnnymedhane@gmail.com" className={styles.link}> johnnymedhane@gmail.com</a>.
            </p>
        </div>
    )
}