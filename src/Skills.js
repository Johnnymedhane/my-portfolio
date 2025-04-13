


export function Skills() {
  const skills = [
    { name: 'GitHub', width: '100', img: 'https://th.bing.com/th/id/OIP.jaHwmagXkJZBZXWOOBlfjAHaD4?rs=1&pid=ImgDetMain' },
    { name: 'Sql', width: '100', img: 'https://static.frontendmasters.com/resources/2018-03-27-sql/thumb.jpg' },
    { name: 'HTML5', width: '90', img: 'https://th.bing.com/th/id/OIP.fbso8uQcHJtJfO_G8bMacQHaDr?rs=1&pid=ImgDetMain' },
    { name: 'CSS', width: '80', img: 'https://logospng.org/download/css-3/logo-css-3-2048.png' },
    { name: 'JavaScript', width: '80', img: 'https://logos-download.com/wp-content/uploads/2019/01/JavaScript_Logo.png' },
    { name: 'React', width: '70', img: 'https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png' },
    { name: 'Python', width: '60', img: 'https://anturis.com/wp-content/uploads/2022/09/Python-Logo-1.png' },
    { name: 'Git', width: 60, img: 'https://miro.medium.com/max/3840/1*fDwzjCH3qzhosC6DVel4ng.jpeg' },

  ];
  return (
   
      <section id="skills">
        <div className="skills">
          <h2 className="section-title">Skills</h2>
          <ul className="skills-list">
            {skills.map((skill, i) => <SkillsItem key={skill.name} skill={skill} i={i} />)}
          </ul>
        </div>
      </section>
  );
}
export function SkillsItem({ skill, i }) {

  const width = {
    width: `${skill.width}%`,
  };

  return (
    <li className="skills-item">
     <div className="title-wrapper">
        <h3>{skill.name}
        </h3>
        {/* <img src={skill.img} alt={skill.name} /> */}
      </div>
      <div className="bar">
        <div className="bar-fill" style={width} data-label={`${skill.width}%`}></div>
      </div>
    </li>
  );
}

