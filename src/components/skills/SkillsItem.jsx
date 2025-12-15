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
