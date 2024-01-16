import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return(
        <div className={styles.footerwrapper}>
            <div className={styles.footer}>
                <div className={styles.footer__privacy}>
                    <p>© 2023 All rights reserved</p>
                </div>
                <div className={styles.footer__links}>
                    <Link to="#">Terms</Link>
                    <Link to="#">Privacy</Link>
                    <Link to="#">Cookies</Link>
                </div>
                <div className={styles.footer__socials}>
                    <Link to="#"><img src="../../images/facebook.png" alt="icon" /></Link>
                    <Link to="#"><img src="../../images/twitter.png" alt="icon" /></Link>
                    <Link to="#"><img src="../../images/instagram.png" alt="icon" /></Link>
                    <Link to="#"><img src="../../images/youtube.png" alt="icon" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Footer;