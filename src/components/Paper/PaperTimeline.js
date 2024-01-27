import React, { useState } from "react";
import styles from "./styles.module.scss";
import Slider3 from "../Slider/Slider3";
import PaperFiles from "./PaperFiles";
import PdfViewer from "./PdfViewer";

const PaperTimeline = ({data}) => {

    const [category , setCategory] = useState(null)

    const handleCategory = (categories) =>{
        setCategory(categories)
    }





    return(
        <>
            <div className={styles.timeline}>
                <div className={styles.timeline__item}>
                        <Slider3>
                            {data?.map((item) => (
                                <div
                                    className="timeline-item"
                                    onClick={() => handleCategory(item?.date_paper)}
                                >
                                    <img src="../../images/timelinevector.png" alt="icon" />
                                    <p>{item?.date}</p>
                                </div>
                            ))}
                        </Slider3>
                </div>
            </div>
            {category != null ? <PaperFiles data={category} /> : ""}
        </>

    )
}

export default PaperTimeline;