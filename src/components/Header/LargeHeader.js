import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const LargeHeader = () => {
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
                        <Link to="/company">Technolohy</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/paper">Resources</Link>
                        <Link to="/company">Company</Link>
                    </div>
                </div>
                <div className={styles.header__wrapper__search}>
                    <div className={styles.items}>
                        <Link to="/gallery">
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                <path d="M18.447 0H7.553C2.821 0 0 2.821 0 7.553V18.447C0 19.864 0.247 21.099 0.728 22.139C1.846 24.609 4.238 26 7.553 26H18.447C23.179 26 26 23.179 26 18.447V15.47V7.553C26 2.821 23.179 0 18.447 0ZM23.881 13.65C22.867 12.779 21.229 12.779 20.215 13.65L14.807 18.291C13.793 19.162 12.155 19.162 11.141 18.291L10.699 17.927C9.776 17.121 8.307 17.043 7.267 17.745L2.405 21.008C2.119 20.28 1.95 19.435 1.95 18.447V7.553C1.95 3.887 3.887 1.95 7.553 1.95H18.447C22.113 1.95 24.05 3.887 24.05 7.553V13.793L23.881 13.65Z" fill="white"/>
                            </svg>
                        </Link>
                        <Link to="/product">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                                <path d="M5.75 11.375C9.85738 11.8872 13.1128 15.1426 13.625 19.25M5.75 5.75C13.2058 5.75 19.25 11.7942 19.25 19.25M5.75 23.75H19.25C21.7353 23.75 23.75 21.7353 23.75 19.25V5.75C23.75 3.26472 21.7353 1.25 19.25 1.25H5.75C3.26472 1.25 1.25 3.26472 1.25 5.75V19.25C1.25 21.7353 3.26472 23.75 5.75 23.75Z" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            </svg> 
                        </Link>
                        <Link to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                <path d="M11.4 21.8H16.6M19.4345 27H8.56554C5.56418 27 3.13109 24.6781 3.13109 21.814V15.473C3.13109 14.5523 2.74782 13.6693 2.06559 13.0182C0.484947 11.5099 0.69043 9.01066 2.49826 7.75599L10.8036 1.99189C12.7092 0.669369 15.2908 0.669369 17.1964 1.99189L25.5017 7.75599C27.3096 9.01066 27.5151 11.5099 25.9344 13.0182C25.2522 13.6693 24.8689 14.5523 24.8689 15.473V21.814C24.8689 24.6781 22.4358 27 19.4345 27Z" stroke="#65A3FF" stroke-width="2" stroke-linecap="round"/>
                            </svg>
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

export default LargeHeader;