import styles from './Footer.module.css';

function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <div className={styles.footer}>
            <p>&copy; {currentYear} </p>
               <p>Johnny Medhane. All rights reserved.</p>
        </div>
    )
}

export default Footer
