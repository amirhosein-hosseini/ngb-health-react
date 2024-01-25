import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const PaperFiles = ({data}) => {



    const [files , setFiles] = useState(null)


    const handleSetFile = (files) => {
        setFiles(files)
    }

    // console.log(data)

    


    return(
        <div className={styles.paper}>
            <div className={styles.paperfiles}>
                {data?.map((item) => (
                    <div className={styles.paperfiles__item} onClick={() => handleSetFile(item?.paper_category)}>
                        <img src="../../images/filevector.png" alt="icon" />
                        <p>
                            {item?.category}
                        </p>
                    </div>
                ))}
            </div>
            <div className={styles.papernames}>
                {files?.map((item) => (
                    <div className={styles.papernames__item}>
                        <img src="../../images/pdficon.png" alt="icon" />
                        <p>
                            {item?.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>

    )
}

export default PaperFiles;