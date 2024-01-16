import React from "react";
import styles from "./styles.module.scss";

const AboutDesc = ({title , desc}) => {
    return(
        <div className={styles.aboutdesc}>
            <p className={styles.aboutdesc__title}>
                {title}
            </p>
            <p className={styles.aboutdesc__desc}>
                {desc}
            </p>
        </div>
    )
}

export default AboutDesc;