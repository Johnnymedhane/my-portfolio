import styles from "../../pages/myStory.module.css";

const values = [
    { 
        title: 'What Drives Me',
        text: `I am motivated to serve as an example for
         other asylum seekers and refugees, showing that
         perseverance and self- belief can lead to success.My ambition is
         to join a team that values growth, innovation, and collaboration.`
    },
    {
        title: 'Personal characteristics & strengths',
        text: [
            {
                title: 'Resilience and perseverance: ',
                text: `I have faced numerous challenges, from being forced into exile at an 
                    early age(14 years old) to struggling financially and 
                    overcoming difficult personal circumstances. Yet I refused to give up and continuously worked toward a better future.`
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
];

export function Values() {
    return (
        <div className={styles.valuesContainer}>
            <h2 className={styles.h2Title}>
                My Values 
            </h2>
            <div className={styles.valuesContent}>
                <h3 className={styles.contentTitle}>{values[0].title}</h3>
                <p className={styles.valueText}>{values[0].text}</p>
           </div>

            <div className={styles.valuesContent}>
                <h3 className={styles.contentTitle}>{values[1].title}</h3>
                <ul className={styles.valuesList}>
                    {values[1].text.map((value, index) => (
                        <li key={index}>
                            <h4>{value.title}</h4>
                            <p className={styles.valueText}>{value.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}