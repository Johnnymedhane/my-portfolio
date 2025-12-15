import { SocialMedia } from "../hero/SocialMedia";


export function MoreInfo() {
  return (
    <div className="more-info">
      <ul className="contact-list">
        <li className="contact-item">
          <div className="contact-icon">
            <i className="fa-regular fa-envelope"></i>
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>

            <a href="mailto:johnnymedhane@gmail.com" className="contact-link"> Johnnymedhane@gmail.com
            </a>
          </div>

        </li>
        <li className="contact-item">
          <div className="contact-icon">
            <i className="fa-solid fa-mobile-alt"></i>
          </div>
          <div className="contact-info">
            <p className="contact-title"> phone</p>
            <a href="tel:+972539649436" className="contact-link"> +972 53-9649-362</a>
          </div>
        </li>
        <li className="contact-item">
          <div className="contact-icon">
            <i className="fa-solid fa-calendar-days"></i>
          </div>
          <div className="contact-info">
            <p className="contact-title">Birthday</p>
            <time dateTime="1996-09-24">september 24, 1996</time>
          </div>
        </li>
        <li className="contact-item">
          <div className="contact-icon">
            <i className="fa-solid fa-location-dot"></i>
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>

            <address>Kay Ozer, Pethak Tikva,Israel</address>
          </div>
        </li>
      </ul>
      <div className="separator"></div>
      <SocialMedia marginTop={20}/>
    </div>
  );
}
