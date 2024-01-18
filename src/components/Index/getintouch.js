import React from "react";
import styles from './styles.module.scss';
import { BlueButton, GreenArrowButton } from "../Button/Button";

const GetInTouch = () => {
    return(
        <div className={styles.getintouch}>
            <p className={styles.getintouch__title}>
                Want to keep in touch? Join our email
                <br />
                list to stay up-to-date 
                <BlueButton>Connected</BlueButton>
            </p>
            <p className={styles.getintouch__subtitle}>
                Get in touch 
            </p>
            <div className={styles.getintouch__input}>
                <div className={styles.input}>
                    <input type='text' placeholder='Email:' />
                </div>
                <div className={styles.button}>
                    <GreenArrowButton>
                        Submit
                    </GreenArrowButton>
                </div>
            </div>
        </div>
    )
}

export default GetInTouch;