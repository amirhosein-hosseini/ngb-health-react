import React from "react";
import styles from "./styles.module.scss";
import { BlueButton } from "../Button/Button";
import TopFooter from "../TopFooter/topFooter";

const ContactPage = () => {
    return(
        <>
            <div className={styles.contactwrapper}>
                <div className={styles.contact}>
                    <div className={styles.contact__title}>
                        <p>
                            STAY CONNECTED 
                        </p>
                    </div>
                    <div className={styles.contact__desc}>
                        <p className={styles.title}>
                            Be in The Know 
                        </p>
                        <p className={styles.desc}>
                            Contact a sales rep and learn all the ways we can empower you Whether it's product question, a webinar request, or help
                        </p>
                    </div>
                    <div className={styles.contact__form}>
                        <p className={styles.title}>
                            Let's build a partnership
                        </p>
                        <form>
                            <div className={styles.formgroup}>
                                <input type="text" placeholder="*First name " />
                            </div>
                            <div className={styles.formgroup}>
                                <input type="text" placeholder="*Last name " />
                            </div>
                            <div className={styles.formgroup}>
                                <input type="text" placeholder="*Hospital / Organization " />
                            </div>
                            <div className={styles.formgroup}>
                                <input type="text" placeholder="*Specialty" />
                            </div>
                        </form>
                        <div className={styles.button}>
                            <BlueButton>Submit</BlueButton>
                        </div>
                    </div>
                </div>
            </div>
            <TopFooter />
        </>
    )
}

export default ContactPage;