import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.scss"

const Navbar = () => {

    const linkStyles = ({isActive}) => {
        return isActive
        ? `${styles.link} ${styles.active_link}`
        : `${styles.link}`
    }

  return (
    <nav className={styles.nav}>
        <NavLink to="/" className={linkStyles}>SPORTSBALL SUPPLIES</NavLink>
        <div className="rightSection">
            <NavLink to="/catalogue" className={linkStyles}>Catalogue</NavLink>
            <NavLink to="/checkout" className={linkStyles}>Cart</NavLink>
            <NavLink to="/admin" className={linkStyles}>Admin Login</NavLink>
        </div>
    </nav>
  )
}

export default Navbar