import { Link } from "react-router-dom"
import {styles} from "./Logo.module.css"
function Logo() {
    return (
        <div className="logo">
            <Link to="/">
                <span> JM</span>
            </Link>
        </div>
    )
}

export default Logo
