import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { getAllProductContents } from "../../api/product";
import { domain } from "../../api/domain";

const ProductPage = () => {



    const [productContents , setProductContents] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllProductContents();
            setProductContents(data.data.news[0]);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);



    console.log(productContents)






    return(
        <div className={styles.product}>
            <div className={styles.product__wrapper}>
                <div className={styles.product__wrapper__left}>
                    <div className={styles.image}>
                        <img src={domain + productContents?.h_image_right.substring(1)} alt="image" />
                    </div>
                    <div className={styles.desc}>
                        <p>
                            {productContents?.left_description}
                        </p>
                    </div>
                </div>
                <div className={styles.product__wrapper__right}>
                    <p className={styles.title}>
                        {productContents?.title}
                    </p>
                    <p className={styles.desc}>
                        {productContents?.right_description}
                    </p>
                </div>
            </div>
            <div className={styles.product__gradient}></div>
        </div>
    )
}

export default ProductPage;