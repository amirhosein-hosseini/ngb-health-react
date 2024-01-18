import React from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";

const TopFooter = () => {
    return(
        <div className={styles.topfooter}>
            <div className={styles.topfooter__left}>
                <div className={styles.links}>
                    <ul>
                        <li><Link to="#">Company</Link></li>
                        <li><Link to="#">About us</Link></li>
                        <li><Link to="#">Careers</Link></li>
                        <li><Link to="#">Resources</Link></li>
                        <li><Link to="#">News & events</Link></li>
                    </ul>
                </div>
                <div className={styles.numbers}>
                    <div className={styles.item}>
                        <img src="../../images/america.png" alt="icon" />
                        <p>+1 725 934-3352 </p>
                    </div>
                </div>
            </div>
            <div className={styles.topfooter__right}>
                <div className={styles.image}>
                    <img src="../../images/topfooterlogo.png" alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default TopFooter;
