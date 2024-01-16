import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom"

const Header = () => {
    return(
        <div className={styles.header}>
            <div className={styles.header__wrapper}>
                <div className={styles.header__wrapper__links}>
                    <div className={styles.logo}>
                        <Link to="/">
                            <img src="../../images/headerlogo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className={styles.list}>
                        <Link to="/product">Product</Link>
                        <Link to="/about">About Team</Link>
                        <Link to="/company">Company</Link>
                        <Link to="/gallery">Gallery</Link>
                    </div>
                </div>
                <div className={styles.header__wrapper__search}>
                    <div className={styles.items}>
                        <Link to="/">
                            <img src="../../images/homevector.png" alt="icon" /> 
                        </Link>
                        <Link to="/">
                            <img src="../../images/feedvector.png" alt="icon" /> 
                        </Link>
                    </div>
                    <div className={styles.input}>
                        <input type="text" />
                        <img src="../../images/searchvector.png" alt="icon" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;