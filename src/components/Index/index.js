import React, { useEffect, useState } from 'react';
import Hero from "./hero";
import IndexAbout from "./indexAbout";
import Modified from "./modified";
import styles from "./styles.module.scss";
import { Link } from 'react-router-dom';
import { BlueButton, GreenArrowButton } from '../Button/Button';
import GetInTouch from './getintouch';
import TopFooter from '../TopFooter/topFooter';
import { getAllHomeContents } from '../../api/home';
import { domain } from '../../api/domain';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Index = () => {


    useEffect(() => {
        AOS.init();
    }, [])

    const [homeContents , setHomeContents] = useState(null)

    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllHomeContents();
            setHomeContents(data.data.home_content[0]);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);






    return(
        <div>
            {homeContents && (
                <>
                    <div className={styles.tophero}>
                        <div className={styles.tophero__gradient}></div>
                        <div className={styles.container}>
                            <div className={styles.tophero__desc}>
                                <p>
                                    {homeContents?.title}
                                </p>
                            </div>
                        </div>
                    </div>
                    <Hero data={homeContents} />
                    <IndexAbout data={homeContents} />
                    <Modified data={homeContents} />
                    <div className={styles.main}>
                        <div className={styles.main__video} data-aos="zoom-in" data-aos-duration="2500">
                        {homeContents?.study_video && (
                            <video controls>
                                <source src={String(domain + homeContents.study_video.substring(1))} type="video/mp4" />
                            </video>
                        )}
                        </div>
                        <div className={styles.main__buttons}>
                            <Link to="#"><BlueButton>AI Solution</BlueButton></Link>    
                            <Link to="/product"><BlueButton>Product</BlueButton></Link> 
                            <Link to="/company"><BlueButton>Company</BlueButton></Link>     
                        </div>
                        <GetInTouch />
                        <TopFooter />
                    </div>
                </>
            )}
        </div>
    )
}

export default Index;