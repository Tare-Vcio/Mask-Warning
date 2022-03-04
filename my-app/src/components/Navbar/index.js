import React from "react"
import styles from './Navbar.module.css' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
    
    return (
        <div className={styles.header}>
            <div className={styles.headerNavbar}>
                <div className="logo">
                    <a href="#!" class="brand-logo">Logo</a>
                </div>

                <div className={styles.detailNavbar}>
                    <ul className={styles.navbarList}>
                        <li className={styles.navbarItem}>
                            
                            Home
                        </li>
                        <li className={styles.navbarItem}>
                            
                            Guide
                        </li>
                        <li className={styles.navbarItem}>
                            
                            Camera
                        </li>
                        <li className={styles.navbarItem}>
                            
                            Statistics
                        </li>
                        <li className={styles.navbarItem}>
                            
                            Report
                        </li>
                        <li className={styles.navbarItem}>
                            <FontAwesomeIcon icon={['fal', 'sign-out-alt']} fixedWidth />
                            About us
                        </li>
                    </ul>
                    <div className={styles.authorNavbar}>
                        <span>Sign in</span>
                    </div>
                </div>
            </div>
       </div>
    )
}

export default Navbar
