import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import AboutDesc from "./AboutDesc";
import AboutCategory from "./AboutCategory";
import AboutValues from "./AboutValues";
import GetInTouch from "../Index/getintouch";
import TopFooter from "../TopFooter/topFooter";
import { getAllTeamContents } from "../../api/about";

const AboutPage = () => {


    const [teamContants , setTeamContents] = useState(null);




    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllTeamContents();
            setTeamContents(data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);


    // console.log(teamContants)


    return(
        <div className={styles.about}>
            <div className={styles.abouttopgradient}></div>
            <div className={styles.aboutbottomgradient}></div>
            <div className={styles.firstaboutdesc}>
                <div className={styles.lightvector}>
                    <img src="../../images/lightvector.png" alt="vector" />
                </div>
                <AboutDesc title={"Our Mission"} desc={teamContants?.team_content[0]?.mission_description} />
            </div>
            <div className={styles.about__main}>
                <div className={styles.abouttoprightvector}>
                    <img src="../../images/abouttoprightvector.png" alt="vector" />
                </div>
                <div className={styles.aboutcentervector}>
                    <img src="../../images/aboutcentervector.png" alt="vecotr" />
                </div>
                <AboutCategory />
                <AboutCategory />
                <AboutCategory />
                <div className={styles.secondaboutdesc}>
                    <div className={styles.lightvector}>
                        <img src="../../images/lightvector.png" alt="vector" />
                    </div>
                    <AboutDesc title={"Our Vision"} desc={teamContants?.team_content[0]?.vision_description} />
                </div>
            </div>
            <AboutValues data={teamContants?.team_values} />
            <GetInTouch />
            <TopFooter />
        </div>
    )
}

export default AboutPage;