import React from "react";
import "./styles.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { domain } from "../../api/domain";

const Slider1 = ({data , onImageClick}) => {


    const CustomNextArrow = (props) => (
        <div {...props} className="custom-arrow next">
            <img src="../../images/next.png" alt="icon" />
        </div>
      );
    
      const CustomPrevArrow = (props) => (
        <div {...props} className="custom-arrow prev">
          <img src="../../images/prev.png" alt="icon" />
        </div>
      );


      
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };





    
      return (
        <Slider {...settings}>
          {/* Your carousel content goes here */}
          {data?.map((item) => (
            <div className="my-slide-item"><img src={domain + item?.image_slide?.substring(1)} alt="image" onClick={() => onImageClick(item)} /></div>
          ))}
        </Slider>
      );
}

export default Slider1;