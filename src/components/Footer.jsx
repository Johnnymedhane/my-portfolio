import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
      <footer className={styles.footer}>
        <p>
          &copy; {currentYear} <a href="mailto:johnnymedhane@gmail.com">johnnymedhane@gmail.com</a>
        </p>
      </footer>
    );
  }
  

export default Footer
