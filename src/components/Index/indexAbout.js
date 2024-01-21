import { domain } from "../../api/domain";
import { BlueArrowButton, BlueButton, GrayButton } from "../Button/Button";
import styles from "./styles.module.scss";

const IndexAbout = ({data}) => {




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
                <div className={styles.indexabout__desc}>
                    <p className={styles.subtitle}>
                        {data?.name_ceo}
                    </p>
                    <p className={styles.title}>
                        {data?.title_ceo}
                    </p>
                    <p className={styles.desc}>
                        {data?.academic_title}
                        <br/>
                        {data?.study_field_title}
                    </p>
                    <div className={styles.buttons}>
                        <div>
                            <BlueArrowButton>Contact us </BlueArrowButton>
                        </div>
                        <div>
                            <BlueArrowButton>FAQ </BlueArrowButton>
                        </div>
                        <div style={{marginTop: "40px"}}>
                            <BlueButton>Connected</BlueButton>
                        </div>
                    </div>
                </div>
                <div className={styles.indexabout__image}>
                    <img src={domain + data?.ceo_image.substring(1)} alt="image" />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.description}>
                    <p className={styles.title}>
                        Description
                    </p>
                    <div className={styles.desc}>
                        <p>
                            {data?.description}
                        </p>
                        <GrayButton>More</GrayButton>
                    </div>
                    <div className={styles.buttons}>
                        <BlueArrowButton>Watch video</BlueArrowButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IndexAbout;