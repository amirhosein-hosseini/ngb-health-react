import React from "react";
import styles from "./styles.module.scss";
import PaperTimeline from "./PaperTimeline";
import PaperFiles from "./PaperFiles";

const PaperPage = () => {
    document.body.style.backgroundColor = '#001636';




    return(
        <div className={styles.paper}>
            <PaperTimeline />
            <PaperFiles />
        </div>
    )
}

export default PaperPage;