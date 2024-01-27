import { Link } from "react-router-dom";
import { domain } from "../../api/domain";
import { BlueArrowButton, BlueButton, GrayButton } from "../Button/Button";
import styles from "./styles.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const IndexAbout = ({data}) => {



    useEffect(() => {
        AOS.init();
    }, [])


    return(
        <div className={styles.indexabout}>
            <div className={styles.bluegradient}></div>
            <div className={styles.indexaboutvector}>
                <img src="../../images/indexaboutvector.png" alt="vector" />
            </div>
            <div className={styles.indexaboutcontainer}>
                <div className={styles.lightvector}>
                    <img src="../../images/lightvector.png" alt="vector" />
                </div>
                <div className={styles.indexabout__desc} data-aos="fade-right" data-aos-duration="2500">
                    <p className={styles.subtitle}>
                        {data?.name_ceo}
                    </p>
                    <p className={styles.title}>
                        {data?.title_ceo}
                    </p>
                    <p className={styles.desc}>
                        {data?.study_field_title}
                    </p>
                    <div className={styles.buttons}>
                        <div>
                            <Link to="/contact">
                                <BlueArrowButton>Contact us </BlueArrowButton>
                            </Link>
                        </div>
                        <div>
                            <BlueArrowButton>FAQ </BlueArrowButton>
                        </div>
                        <div style={{marginTop: "40px"}}>
                            <Link to="/contact">
                                <BlueButton>Connected</BlueButton>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.indexabout__image} data-aos="zoom-in" data-aos-duration="2500">
                    <img src={domain + data?.ceo_image.substring(1)} alt="image" />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.description}>
                    <p className={styles.title}>
                        Description
                    </p>
                    <div className={styles.desc} data-aos="zoom-in" data-aos-duration="2500">
                        <p>
                            {data?.description}
                        </p>
                        <Link to="/company">
                            <GrayButton>More</GrayButton>
                        </Link>
                    </div>
                    <div className={styles.buttons}>
                        <Link to="/gallery">
                            <BlueArrowButton>Watch video</BlueArrowButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexAbout;