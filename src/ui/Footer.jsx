import { FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <span>&copy; {currentYear} </span>
      <div className={styles.contact}>
        <div className={styles.email}>
          <HiOutlineMail />
          <a
            href="mailto:johnnymedhane@gmail.com?subject=Frontend Opportunity"
            className={styles.emailLink}  >
          Send an email
          </a>
        </div>
        <div className={styles.phone}>
          <FaWhatsapp />
          <a href="whatsapp:+97259649436">Send Message</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
