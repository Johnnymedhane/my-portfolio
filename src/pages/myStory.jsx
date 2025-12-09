
import styles from "./myStory.module.css";
import { BackGround } from "../components/myStoryContainer/BackGround";
import { MyJourney } from "../components/myStoryContainer/MyJourney";
import { Values } from "../components/myStoryContainer/Values";




 export default function myStory() {
    return (
       
            <Mybackground />
    
    )
}



export function Mybackground() {
    return (
        <div>
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