import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import PdfOneViewer from "../Paper/PdfOneViewer";
import { getAllSearchContents } from "../../api/search";
import PdfViewer from "../Paper/PdfViewer";

const Search = () => {

    const params = useParams();
    const slug = params.slug;
    const [searchContents , setSearchContents] = useState(null);
    const [pdf , setPdf] = useState(null)

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllSearchContents(slug);
            setSearchContents(data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);

    const handlepdf = (pdffile) => {
        setPdf(pdffile);
    }


    console.log(console.log(pdf))

    return(
        <div className={styles.search}>
            <div className={styles.papernames}>
                {searchContents?.map((item) => (
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

export default Search