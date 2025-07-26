export function Service() {
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
  );
}
