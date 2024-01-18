import { domain } from "../../api/domain";
import { GrayButton } from "../Button/Button";
import styles from "./styles.module.scss";

const Hero = ({data}) => {





    return(
        <div className={styles.hero}>
            <div className={styles.container}>
                    <div className={styles.herotopleftvector}>
                        <img src="../../images/herotopleftvector.png" alt="vector" />
                    </div>
                    <div className={styles.herocentervector}>
                        <img src="../../images/herocentervector.png" alt="vector" />
                    </div>
                    <div className={styles.herotopcentervector}>
                        <img src="../../images/herotopcentervector.png" alt="vector" />
                    </div>
                <div className={styles.herocontainer}>
                    <div className={styles.herocontainer__desc}>
                        <p>
                            {data?.h_title}
                        </p>
                    </div>
                    <div className={styles.herocontainer__images}>
                        <div className={styles.leftimage}>
                            <img src={domain + data?.h_image_left.substring(1)} alt="image" />
                        </div>
                        <div className={styles.rightimage}>
                            <img src={domain + data?.h_image_right.substring(1)} alt="image" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.hero__button}>
                <GrayButton>Explore</GrayButton>
            </div>
        </div>
    )
}

export default  Hero;