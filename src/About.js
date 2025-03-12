import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const values = [ 
   {
                title: 'Attention to detail: ',
    text: `I ensure quality in everything I do. 
                  I ensure  that my code is clean, efficient, and well-documented.`
             },
            {
                title: 'A growth mindset: ', 
              text: `I'm eager to learn and develop. 
                 I'm always looking for ways to improve my skills and knowledge.`
            },
            {
                 title: 'Problem-solving skills:',
              text: `I dive deep into challenges to find the best solutions. 
              I'm not afraid to ask questions and seek help when needed 
              and i really enjoy all the challenges of coding, debugging, testing, and exploring to find a solution.`
                
            },
              {
                title: 'Teamwork and independence:',
                text: `I can thrive both as a collaborator and an individual contributor.`

            }
]

export function About() {
  return (
    <article>
      <section id="about">
        <div className="about">
          <h2 className="section-title">About Me</h2>

          <div className="about-text">
            <p>
              Hello, I'm <strong> Johnny Medhane</strong> a self-taught Front-end Developer with a passion for
              creating beautiful and responsive websites. I have
              a strong foundation in <span className="highlight">HTML </span>,
              <span className="highlight">CSS </span>,
              <span className="highlight">JavaScript </span>,
              and  <span className="highlight">React </span>
              and I'm constantly learning new technologies to improve my skills.
              Programming is a source of inspiration and creativity for me, and I love the challenge of turning ideas into code.
            </p>
            <p> I invite you to take a look at my projects
              and resume, and feel free to contact me if you have any questions
              or would like to work together.
               <Link className="link-my-story" to="/my-story" >
                Read my story &rarr;</Link>
            </p>
          </div>
        </div>
        <Service />
        <Benefits />
        <ContactMe />
      </section>
    </article>
  );
}
function Service() {
  return (
     <div className="service">
          <h2 className="service-title">What I do</h2>
          <div className="service-list">
            <div className="service-item">
              <div className="service-icon">
                <i className="fa-solid fa-file-contract"></i>
              </div>
              <h3>QA Testing</h3>
              <div className="service-description">
              <p>Writing documentation(STP, STD, STR), performing test cases and bug reporting.</p>
              <p> Ensuring that the product is of the highest possible quality for customers.
                Using all of the techniques and methodologies I've learned to prevent issues with the product or service and to ensure great user experience for your customers.
                </p>
                </div>
            </div>
            <div className="service-item">
              <div className="service-icon">
                <i className="fa-solid fa-laptop-code"></i>
              </div>
              <h3>Web Development</h3>
              <div className="service-description">
                <p> I build websites using modern technologies like HTML, CSS, and JavaScript.  
                </p>
                </div>
            </div>

          </div>
        </div>
  )
}
function Benefits() {
  const [showText, setShowText] = useState(null);

  return (
    <div className="benefits">
      <h2 className="benefits-title">Why I'm a Great Fit</h2>
      <ul className="benefits-list">
        {values.map((value, index) => (
          <Value
            key={index}
            index={index}
            value={value}
            showText={showText}
            setShowText={setShowText}
          />
        ))}
      </ul>
    </div>
  );
}

    
    
 function Value({ index, value, showText, setShowText }) {
  const isTextVisible = index === showText;

  return (
    <li className={`benefits-item ${isTextVisible ? "show-text" : ""}`} onClick={() => setShowText(isTextVisible ? null : index)}>
      <h3>{value.title}</h3>
      {isTextVisible && <p className="text">{value.text}</p>}
      <span className="benefits-indicator">{isTextVisible ? "-" : "+"} </span>
    </li>
  );
}
function ContactMe() {
  return (
    <div className="contact-me">
      <h2 className="contact-me-title">Let's Connect</h2>
     
      <p className='contact-me-text'>
        I'm seeking opportunities where I can contribute my skills,
        learn from others, and grow professionally as a Frontend Developer.
      </p>
      <p  className='contact-me-text'>
        If you have a project you'd like to discuss or
         you're looking for a motivated, detail-oriented
        professional who has overcome challenges
        and is ready to make an impact, let's connect.
        <span className="contact-link"> 
          <a href="mailto:johnnymedhane@gmail.com" className="contact-me-link">johnnymedhane@gmail.com</a>
        </span>
      </p>
    </div>
  );
}