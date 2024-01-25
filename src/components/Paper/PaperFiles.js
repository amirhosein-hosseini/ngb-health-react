import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import PdfViewer from "./PdfViewer";
import PdfOneViewer from "./PdfOneViewer";

const PaperFiles = ({data}) => {



    const [files , setFiles] = useState(null);
    const [pdf , setPdf] = useState(null);


    const handleSetFile = (files) => {
        setFiles(files)
    }

    const handlepdf = (pdffile) => {
        setPdf(pdffile);
    }

    console.log(files)

    


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
                        <p onClick={() => handlepdf(item?.pdf_file)}>
                            {item?.title}
                        </p>
                    </div>
                ))}
            </div>
            {pdf != null ? <PdfViewer url={pdf} /> : ""}
        </div>
    )
}

export default PaperFiles;