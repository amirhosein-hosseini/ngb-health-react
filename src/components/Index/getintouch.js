import React from "react";
import styles from './styles.module.scss';
import { BlueButton, GreenArrowButton } from "../Button/Button";
import { Link } from "react-router-dom";

const GetInTouch = () => {
    return(
        <div className={styles.getintouch}>
            <p className={styles.getintouch__firsttitle}>
                Want to know more? Let's talk
                <Link to="/contact">
                    <BlueButton>Connected</BlueButton> 
                </Link>
            </p>
            <p className={styles.getintouch__title}>
                Want to keep in touch? Join our email
                <br />
                list to stay up-to-date 
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