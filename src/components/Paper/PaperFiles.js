import React from "react";
import styles from "./styles.module.scss";

const PaperFiles = () => {
    return(
        <div className={styles.paper}>
            <div className={styles.paperfiles}>
                <div className={styles.paperfiles__item}>
                    <img src="../../images/filevector.png" alt="icon" />
                    <p>
                        file name
                    </p>
                </div>
                <div className={styles.paperfiles__item}>
                    <img src="../../images/filevector.png" alt="icon" />
                    <p>
                        file name
                    </p>
                </div>
                <div className={styles.paperfiles__item}>
                    <img src="../../images/filevector.png" alt="icon" />
                    <p>
                        file name
                    </p>
                </div>
                <div className={styles.paperfiles__item}>
                    <img src="../../images/filevector.png" alt="icon" />
                    <p>
                        file name
                    </p>
                </div>
            </div>
            <div className={styles.papernames}>
                <div className={styles.papernames__item}>
                    <img src="../../images/pdficon.png" alt="icon" />
                    <p>
                        pdf name 
                    </p>
                </div>
                <div className={styles.papernames__item}>
                    <img src="../../images/pdficon.png" alt="icon" />
                    <p>
                        pdf name 
                    </p>
                </div>
                <div className={styles.papernames__item}>
                    <img src="../../images/pdficon.png" alt="icon" />
                    <p>
                        pdf name 
                    </p>
                </div>
                <div className={styles.papernames__item}>
                    <img src="../../images/pdficon.png" alt="icon" />
                    <p>
                        pdf name 
                    </p>
                </div>
            </div>
        </div>

    )
}

export default PaperFiles;