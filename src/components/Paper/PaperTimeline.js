import React from "react";
import styles from "./styles.module.scss";
import Slider3 from "../Slider/Slider3";

const PaperTimeline = () => {
    return(
        <div className={styles.timeline}>
            <div className={styles.timeline__item}>
                <Slider3 />
            </div>
        </div>
    )
}

export default PaperTimeline;