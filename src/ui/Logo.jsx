import { Link } from "react-router-dom"
import styles from "./Logo.module.css"
function Logo() {
    return (
        <div className="logo">
            <Link to="/" className={styles.link}>
                <span> JM</span>
            </Link>
        </div>
    )
}

export default Logo
