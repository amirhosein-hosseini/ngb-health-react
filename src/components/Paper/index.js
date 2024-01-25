import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import PaperTimeline from "./PaperTimeline";
import PaperFiles from "./PaperFiles";
import { getAllPaperContents } from "../../api/paper";

const PaperPage = () => {


    const [PaperContents , setPaperContents] = useState(null)

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllPaperContents();
            setPaperContents(data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);






    return(
        <div className={styles.paperwrapper}>
            <div className={styles.paper}>
                {PaperContents && (
                    <PaperTimeline data={PaperContents} />
                )}
            </div>
        </div>
    )
}

export default PaperPage;