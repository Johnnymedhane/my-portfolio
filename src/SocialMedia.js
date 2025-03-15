export function SocialMedia({marginTop = 15}) {
  return (
    <div className="info" style={{marginTop:`${marginTop}px`}}>
      <div className="social-media">
        <div className="media">
          <a href="www.linkedin.com/in/johnny-medhane-53152b1a8">
            <i className="fa-brands fa-linkedin-in"> </i>
          </a>
          
        </div>
        <div className="media">
         <a href="https://github.com/Johnnymedhane" className="github">
            <i className="fa-brands fa-github"></i>
            </a>
     
        </div>
        <div className="media">
          <a href="https://www.instagram.com/johnny_swag1_/" className="instagram">
            <i className="fa-brands fa-instagram"></i>
            </a>
        </div>
        <div className="media">
          <a href="https://www.facebook.com/kahsay.medhane?locale=he_IL" className="facebook">      
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
