
import { Link } from 'react-router-dom';
import { ContactMe } from './ContactMe';
import { Service } from './Service';
import { Benefits } from './Benefits';

// import { Link } from 'react-router-dom';
export const values = [ 
  {
    title: 'Proven Self-taught with Real Projects:',
    text: `Taught myself modern frontend development from scratch and built 15+ real-world applications using React, JavaScript, and CSS.`
  },
  {
    title: 'Strong Technical Foundation:',
    text: `Proficient in React, JSX, State Management, (Redux, Context , useReducer), Tailwind CSS, API integration and performance optimization.`
  },
  {
    title: 'Balanced Skillset: Frontend + QA',
    text: `My QA background makes me a careful, detail-oriented developer who builds with quality and debugging in mind from day one.`

  },

  {
    title: 'Design & UX Awareness :',
    text: `Understand responsive design principles, UX best practices, and styling with Figma and Tailwind. I care deeply about user experience..`
  },
  {
    title: 'Problem-solving skills:',
    text: `I dive deep into challenges to find the best solutions. I really enjoy all the challenges of coding, debugging, testing, and exploring 
           to find a solution.`
  },
  {
    title: 'Excellent Debugging & Testing Skills:',
    text: `Familiar with DevTools, React DevTools, Redux DevTools, Profiler, and other debugging tools.
    I identify and fix bugs efficiently, ensuring high-quality code.`
  },
 
  {
    title: 'Consistent Growth & Adaptability:',
    text: `Always learning. I actively keep up with new features in React, and I’ve transitioned careers through grit, focus, and discipline.`
  },
  {
    title: 'Mission-Driven and Resilient:',
    text: `As an Eritrean asylum seeker building a new career in Israel, I bring unique perspective, perseverance, and a drive to contribute meaningfully.`
  },
  {
    title: 'Passion for technology:',
    text: `I love exploring new technologies and staying up-to-date with industry trends, which helps me 
           bring fresh ideas to the table.`
  }
]

export function About() {


  return (
   
      <section id="about">
        <div className="about">
          <h2 className="section-title">About Me</h2>

          <div className="about-text">
            <p>
              Hello, I'm <span> Johnny Medhane</span>  —   a self-taught Front-end Developer
              with a passion for building beautiful, responsive, and user-friendly websites.
              I have a solid foundation in <b> HTML </b>, <b> CSS, </b> <b> JavaScript, </b>
                <b> React, </b> and  <b> Python </b>
            and I'm constantly exploring new technologies to sharpen my skills and stay up-to-date.
            </p>
            <p>
            Programming is  a creative outlet and a source of inspiration for me.
            I enjoy every part of the development process — Designing, Coding, debugging, testing, and exploring new solutions.
          </p>
          <p>
            Through my coding journey, I've learned more than just programming — I've mastered
            <strong> how to learn anything </strong>, developed strong
            <strong> self-discipline </strong>, enhanced my
            <strong> research skills </strong>, and become highly effective at <strong> problem-solving under pressure </strong>.
            When I encounter new technologies, I don't panic — I'm confident in my ability to figure things out and adapt quickly.
          </p>
            <p> I invite you to take a look at my projects
              and resume -  and if you're curious or want
              to collaborate, feel free to reach out. I'd love to connect!

              <Link className="link-my-story" to="/my-story">
                Read my story &rarr;</Link>
            </p>
          </div>
        </div>
        <Service />
        <Benefits />
        <ContactMe />

      </section>
    
       
  );
}
 export function Value({ index, value, showText, setShowText }) {
  const isTextVisible = index === showText;

  return (
    <li className={`benefits-item ${isTextVisible ? "show-text" : ""}`} onClick={() => setShowText(isTextVisible ? null : index)}>
      <h3>{value.title}</h3>
      {isTextVisible && <p className="text">{value.text}</p>}
      <span className="benefits-indicator">{isTextVisible ? "-" : "+"} </span>
    </li>
  );
}
