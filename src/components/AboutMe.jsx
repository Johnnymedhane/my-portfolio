import  { useState } from 'react';

import { Link } from 'react-router-dom';

// import { Link } from 'react-router-dom';
const values = [ 
  {
    title: 'Attention to detail:',
    text: `I ensure quality in everything I do. I ensure that my code is clean, functional, and user-friendly. 
           And test it thoroughly to ensure the layout, animations, and responsiveness behave as expected 
           on different devices and browsers.`
  },
  {
    title: 'Problem-solving skills:',
    text: `I dive deep into challenges to find the best solutions. I'm not afraid to ask questions and seek 
           help when needed and I really enjoy all the challenges of coding, debugging, testing, and exploring 
           to find a solution.`
  },
  {
    title: 'Teamwork and independence:',
    text: `I can thrive both as a collaborator and an individual contributor. I believe in the power of 
           collaboration and actively seek feedback from others to improve my work.`
  },
  {
    title: 'Strong communication skills:',
    text: `I can convey ideas clearly and effectively, both in writing and verbally. I actively listen to 
           others and encourage open dialogue to foster collaboration.`
  },
  {
    title: 'Time management and organization:',
    text: `I prioritize tasks effectively and manage my time well to meet deadlines.`
  },
  {
    title: 'Responsibility:',
    text: `I take ownership of my work and am accountable for my actions. I believe in delivering on my 
           commitments and maintaining a high standard of quality.`
  },
  {
    title: 'A growth mindset:',
    text: `I'm eager to learn and develop. I'm always looking for ways to improve my skills and knowledge.`
  },
  {
    title: 'Adaptability:',
    text: `I can quickly adjust to new situations and challenges, making me a versatile team member.`
  },
  {
    title: 'Passion for technology:',
    text: `I love exploring new technologies and staying up-to-date with industry trends, which helps me 
           bring fresh ideas to the table.`
  }
]

export function About() {
//  const [showMyStory, setShowMyStory] = useState(false);

  return (
   
      <section id="about">
        <div className="about">
          <h2 className="section-title">About Me</h2>

          <div className="about-text">
            <p>
              Hello, I'm <strong> Johnny Medhane</strong>  —   a self-taught Front-end Developer
              with a passion for building beautiful, responsive, and user-friendly websites.
              I have a solid foundation in <b> HTML </b>, <b>CSS </b>, <b>JavaScript </b>,
                <b >React </b> and  <b>python </b>
              and I'm constantly exploring new technologies to sharpen my skills.
              Programming is a source of inspiration and creativity for me, and I love the all challenges
              of coding, debugging, testing, and exploring to find a solution.
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