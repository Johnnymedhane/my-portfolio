import { FaWhatsapp } from "react-icons/fa";
import styles from "./Footer.module.css";
import { HiOutlineMail } from "react-icons/hi";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.copyright}>&copy; {currentYear} Johnny Medhane</span>
        <div className={styles.contact}>
          <a
            href="mailto:johnnymedhane@gmail.com?subject=Frontend Opportunity"
            className={styles.email}
          >
            <span className={styles.iconBadge}>
              <HiOutlineMail />
            </span>
            Send an email
          </a>
          <a href="whatsapp:+97259649436" className={styles.phone}>
            <span className={styles.iconBadge}>
              <FaWhatsapp />
            </span>
            Send Message
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
