import { domain } from "../../api/domain";
import styles from "./styles.module.scss";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Modified = ({data}) => {

    useEffect(() => {
        AOS.init();
    }, [])

    return(
        <div className={styles.modified} style={{ backgroundImage: `url(${domain + data?.study_back_image.substring(1)})` }}>
            <div className={styles.container}>
                <div className={styles.modifiedwrapper}>
                    <div className={styles.modifiedtitle}>
                        <p>
                            {data?.study_title}
                        </p>
                    </div>
                    <div className={styles.modifiedimage} data-aos="fade-up" data-aos-duration="2500">
                        <img src={domain + data?.study_forward_image.substring(1)} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modified;