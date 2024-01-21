import React from "react";
import styles from "./styles.module.scss";
import PaperTimeline from "./PaperTimeline";
import PaperFiles from "./PaperFiles";

const PaperPage = () => {




    return(
        <div className={styles.paperwrapper}>
            <div className={styles.paper}>
                <PaperTimeline />
                <PaperFiles />
            </div>
        </div>
    )
}

export default PaperPage;