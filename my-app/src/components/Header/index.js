import React from "react";
import styles from "./Header.module.css";
const Header = () => {
    return (
        <header className={`container ${styles.header}`}>
            <div className={styles.headerLogo}>
                <img src="./icons/logo.png" />
            </div>
            <nav className={styles.headerNavigation}>
                <ul>
                    <li>
                        <a>
                            <img src="./icons/home.png" />
                            <p>Home</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./icons/guide.png" />
                            <p>Guide</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./icons/camera.png" />
                            <p>Camera</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./icons/statistic.png" />
                            <p>Statistic</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./icons/report.png" />
                            <p>Report</p>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src="./icons/about us.png" />
                            <p>About us</p>
                        </a>
                    </li>
                </ul>
            </nav>
            <div className={styles.headerLogin}>
                <a>
                    <img src="./icons/sign in.png"></img>
                    <p>Sign in</p>
                </a>
            </div>
        </header>
    )
}

export default Header