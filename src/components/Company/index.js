import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getAllConmpanyContents } from "../../api/company";
import { domain } from "../../api/domain";

const CompanyPage = () => {

    const [companyContents , setCompanyContets] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllConmpanyContents();
            setCompanyContets(data.data.more_landing[0]);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);







    return(
        <div className={styles.company}>
            <div className={styles.companybottomvector}>
                <img src="../../images/companybottomvector.png" alt="vector" />
            </div>
            <div className={styles.company__header}>
                <div className={styles.companylightvector}>
                    <img src="../../images/lightvector.png" alt="vector" />
                </div>
                <p className={styles.title}>
                    {companyContents?.title}
                </p>
                <div className={styles.item}>
                    <div className={styles.item__image}>
                        <img src={domain + companyContents?.image.substring(1)} alt="image" />
                    </div>
                    <div className={styles.item__desc}>
                        <p className={styles.title}>
                            CEO 
                        </p>
                        <p className={styles.subtitle}>
                            {companyContents?.name}
                        </p>
                        <p className={styles.desc}>
                            {companyContents?.academic_title}
                            <br/>
                            {companyContents?.executive_title}
                            <br/>
                            {companyContents?.study_title}
                        </p>
                    </div>
                </div>
            </div>
            <div className={styles.company__desc}>
                <p>
                    {companyContents?.description}
                </p>
            </div>
        </div>
    )
}

export default CompanyPage;