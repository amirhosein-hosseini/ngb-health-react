import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import Slider1 from "../Slider/Slider1";
import { getAllGalleryContents } from "../../api/gallery";
import { domain } from "../../api/domain";
import Slider2 from "../Slider/Slider2";

const GalleryPage = () => {

    const [imageSrc , setImageSrc] = useState(null);
    const [bannerSrc , setBannerSrc] = useState(null);
    const [galleryContents , setGalleryContents] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await getAllGalleryContents();
            setImageSrc(data.data?.image_slide);
            setGalleryContents(data.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
    }, []);

    useEffect(()=>{
        imageSrc != null ? setBannerSrc(imageSrc[0]) : setBannerSrc(null);
        console.log(imageSrc)
    } , [imageSrc])
    




    const handleBannerChange = (imagesource) => {
        setBannerSrc(imagesource);
    }

    return(
        <div className={styles.gallery}>
            <Slider2 />
            <div className={styles.gallery__main}>
                <div className={styles.banner}>
                    <img src={domain + bannerSrc?.image_slide?.substring(1)} alt="image" />
                </div>
                {imageSrc != null ? <Slider1 data={imageSrc} onImageClick={handleBannerChange}/> : ""}
            </div>
        </div>
    )
}

export default GalleryPage;