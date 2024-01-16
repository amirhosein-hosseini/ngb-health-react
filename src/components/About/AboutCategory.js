import React from "react";
import styles from "./styles.module.scss";

const AboutCategory = () => {
    return(
        <div className={styles.aboutcategory}>
            <div className={styles.aboutcategory__header}>
                <p className={styles.title}>
                    Executive leadership team
                </p>
            </div>
            <div className={styles.aboutcategory__items}>
                <div className={styles.item}>
                    <div className={styles.item__image}>
                        <img src="../../images/aboutimage.png" alt="image" />
                    </div>
                    <div className={styles.item__footer}>
                        <p className={styles.name}>
                            Amirhosein Moghanian 
                        </p>
                        <p className={styles.category}>
                            Chief Executive Officer, Founder 
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item__image}>
                        <img src="../../images/aboutimage.png" alt="image" />
                    </div>
                    <div className={styles.item__footer}>
                        <p className={styles.name}>
                            Amirhosein Moghanian 
                        </p>
                        <p className={styles.category}>
                            Chief Executive Officer, Founder 
                        </p>
                    </div>
                </div>
                <div className={styles.item}>
                    <div className={styles.item__image}>
                        <img src="../../images/aboutimage.png" alt="image" />
                    </div>
                    <div className={styles.item__footer}>
                        <p className={styles.name}>
                            Amirhosein Moghanian 
                        </p>
                        <p className={styles.category}>
                            Chief Executive Officer, Founder 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCategory;