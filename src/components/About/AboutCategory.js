import React, { useEffect } from "react";
import { domain } from "../../api/domain";
import styles from "./styles.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutCategory = ({data}) => {

    useEffect(() => {
        AOS.init();
    }, [])


    return(
        <div className={styles.aboutcategory}>
            <div className={styles.aboutcategory__header}>
                <p className={styles.title}>
                    {data?.header}
                </p>
            </div>
            <div className={styles.aboutcategory__items}>
                {data?.team_category?.map((item) => (
                    <div className={styles.item} data-aos="zoom-in" data-aos-duration="2500">
                        <div className={styles.item__image}>
                            <img src={domain + item?.image.substring(1)} alt="image" />
                        </div>
                        <div className={styles.item__footer}>
                            <p className={styles.name}>
                                {item?.name}
                            </p>
                            <p className={styles.category}>
                                {item?.title}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutCategory;



