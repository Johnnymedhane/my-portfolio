function Section({ title, children, sectionType }) {
  return (
    <section id={sectionType}>
      <div className={sectionType}>
        <h2 className="section-title">{title}</h2>
        {children}
      </div>
    </section>
  );
}

export default Section;
