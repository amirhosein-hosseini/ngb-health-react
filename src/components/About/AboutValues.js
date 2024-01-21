import React from "react";
import styles from "./styles.module.scss";

const AboutValues = ({data}) => {




    return(
        <div className={styles.aboutvalues}>
            <p className={styles.title}>
                Our Values
            </p>
            <div className={styles.aboutvalues__wrapper}>
                {data?.map((item) => (
                    <div className={styles.item}>
                        <p className={styles.desc}>
                            {item?.values_title}
                        </p>
                        <ul>
                            {item?.list_values?.map((item) => (
                                <li>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AboutValues;