import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const ResponsiveHeader = () => {



    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        if (isNavOpen) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }

        return () => {
          document.body.classList.remove('no-scroll');
        };
      }, [isNavOpen]);
    
      const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
      };




    return(
        <div className={styles.nav}>
                <div className={styles.navwrapper}>
                    <div className={styles.rlogo}>
                        <Link to="/">
                            <img src="../../images/headerlogo.png" />
                        </Link>
                    </div>
                    <nav>
                        <div className={styles.right}>
                            <div className={styles.navicon} onClick={toggleNav}>                       
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 24 24" fill="none" stroke="currentColor"   stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </svg>
                            </div>
                            <div className={styles.icons}>
                                <Link to="/gallery">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                        <path d="M18.447 0H7.553C2.821 0 0 2.821 0 7.553V18.447C0 19.864 0.247 21.099 0.728 22.139C1.846 24.609 4.238 26 7.553 26H18.447C23.179 26 26 23.179 26 18.447V15.47V7.553C26 2.821 23.179 0 18.447 0ZM23.881 13.65C22.867 12.779 21.229 12.779 20.215 13.65L14.807 18.291C13.793 19.162 12.155 19.162 11.141 18.291L10.699 17.927C9.776 17.121 8.307 17.043 7.267 17.745L2.405 21.008C2.119 20.28 1.95 19.435 1.95 18.447V7.553C1.95 3.887 3.887 1.95 7.553 1.95H18.447C22.113 1.95 24.05 3.887 24.05 7.553V13.793L23.881 13.65Z" fill="white"/>
                                    </svg>
                                </Link>
                                <Link to="/">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                                        <path d="M11.4 21.8H16.6M19.4345 27H8.56554C5.56418 27 3.13109 24.6781 3.13109 21.814V15.473C3.13109 14.5523 2.74782 13.6693 2.06559 13.0182C0.484947 11.5099 0.69043 9.01066 2.49826 7.75599L10.8036 1.99189C12.7092 0.669369 15.2908 0.669369 17.1964 1.99189L25.5017 7.75599C27.3096 9.01066 27.5151 11.5099 25.9344 13.0182C25.2522 13.6693 24.8689 14.5523 24.8689 15.473V21.814C24.8689 24.6781 22.4358 27 19.4345 27Z" stroke="#65A3FF" stroke-width="2" stroke-linecap="round"/>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                        <div className={styles.navoverlay} onClick={toggleNav}></div>
                        <ul className={styles.navlist + " " + `${isNavOpen ? styles.show : ''}`}>
                            <div className={styles.navclose} onClick={toggleNav}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <div className={styles.navlistwrapper}>
                                <div className={styles.input}>
                                    <input type="text" />
                                    <img src="../../images/searchvector.png" alt="icon" />
                                </div>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/product">Product</Link>
                                </li>
                                <li>
                                    <Link to="/company">Technology</Link>
                                </li>
                                <li>
                                    <Link to="/about">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/paper">Resources</Link>
                                </li>
                                <li>
                                    <Link to="/company">Company</Link>
                                </li>
                            </div>
                        </ul>
                    </nav>
                </div>
        </div>
    )
}

export default ResponsiveHeader;