


export function Resume() {
  const educationList = [
    {
      name: 'On intenet (self-taught)',
      year: '2024 - current',
      description: 'front-end development',
      children: <p className="timeline-text">I have learned the process of Web development: coding, designing, testing, and debugging.   </p>
    },
    {
      name: 'ARDC community (Tel Aviv)',
      year: '2024- 2024',
      description: 'BFF (Bloomberg Finance Fundamentals)',
      children: <p className="timeline-text">An introduction to the key concepts involved in finance and investment.</p>
    },
    {
      name: 'ARDC community (Tel Aviv)',
      year: '2022- 2022',
      description: 'Python and Data Analysis Course',
      children: <p className="timeline-text">Completed a comprehensive course on Python and Data Analysis.</p>
    },
    {
      name: 'The SVCollege',
      year: '2020 - 2021',
      description: 'Professional and practical QA course',
      children: <p className="timeline-text">Gained practical experience in QA methodologies and tools.</p>
    },
    {
      name: 'University school of the arts',
      year: '2007 — 2008',
      description: '',
      children: <p className="timeline-text">Studied various forms of art and design.</p>
    },
  ];

  const experienceList = [
    {
      name: 'freelancer QA Tester',
      year: '2021 - current',
      description: 'UTest',
      children: <p className="timeline-text">Worked on various QA projects as a freelancer.</p>
    },
    {
      name: 'kitchen manager',
      year: '2018 - 2021',
      description: 'BIGA coffee shop',
      children: <p className="timeline-text">Managed kitchen operations and staff at BIGA coffee shop.</p>
    },
  ];

  return (
    <article>
      <section id="resume">
        <div className="resume">
          <h2 className="section-title">Resume</h2>

          <Timeline title="Education" list={educationList} />

          <Timeline title="Experience" list={experienceList} />
        </div>
      </section>
    </article>
  );
}export function TimelineItem({ item }) {
  return (

    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{item.name}</h4>
      <p>{item.description}</p>
      <time className="timeline-item-year">{item.year}</time>
      {item.children}
    </li>

  );
}
export function Timeline({ title, list }) {
  return (
    <div className="timeline">
      <div className="title-wrapper">
        <div className="icon-box">
          <i className="fa-solid fa-book-open"></i>
        </div>
        <h3 className="h3">{title}</h3>
      </div>
      <ul className="timeline-list">
        {list.map((item, i) => (
          <TimelineItem key={i} item={item} />
        ))}
      </ul>
    </div>
  );
}

