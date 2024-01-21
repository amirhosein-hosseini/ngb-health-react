import React from "react";
import styles from "./styles.module.scss";

export const GreenArrowButton = ({children}) => {
    return(
        <button className={styles.greenarrowbutton}>
            {children}
            <div className={styles.arrow}>
                <img src="../../images/whiterightarrow.png" alt="icon" />
            </div>
        </button>
    )
}


export const BlueButton = ({children}) => {
    return(
        <button className={styles.bluebutton}>
            {children}
        </button>
    )
}


export const BlueArrowButton = ({children}) => {
    return(
        <button className={styles.bluearrowbutton}>
            <div className={styles.arrow}>
                <img src="../../images/whiterightarrow.png" alt="icon" />
            </div>
            <p>
                {children}
            </p>
        </button>
    )
}


export const GrayButton = ({children}) => {
    return(
        <button className={styles.graybutton}>
            {children}
        </button>
    )
}