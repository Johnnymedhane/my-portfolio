export function SocialMedia({marginTop = 15}) {
  return (
    <div className="info" style={{marginTop:`${marginTop}px`}}>
      <div className="social-media">
        <div className="media">
          <i className="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="media">
          <i className="fa-brands fa-github"></i>
        </div>
        <div className="media">
          <i className="fa-brands fa-instagram"></i>
        </div>
        <div className="media">
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>
    </div>
  );
}
