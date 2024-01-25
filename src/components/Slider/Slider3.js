import React from "react";
import "./styles.css";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { domain } from "../../api/domain";

const Slider3 = ({data}) => {
    



      
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
        ],
        prevArrow: <></>, // Render nothing for the previous arrow
        nextArrow: <></>,
      };





    
      return (
        <Slider {...settings}>
            {data?.map((item) => (
                <div className="timeline-item">
                    <img src="../../images/timelinevector.png" alt="icon" />
                    <p>
                        2020
                    </p>
                </div>
            ))}

            {/* <div className="timeline-item">
                <img src="../../images/timelinevector.png" alt="icon" />
                <p>
                    2020
                </p>
            </div>
            <div className="timeline-item">
                <img src="../../images/timelinevector.png" alt="icon" />
                <p>
                    2020
                </p>
            </div>
            <div className="timeline-item">
                <img src="../../images/timelinevector.png" alt="icon" />
                <p>
                    2020
                </p>
            </div>
            <div className="timeline-item">
                <img src="../../images/timelinevector.png" alt="icon" />
                <p>
                    2020
                </p>
            </div>
            <div className="timeline-item">
                <img src="../../images/timelinevector.png" alt="icon" />
                <p>
                    2020
                </p>
            </div>
            <div className="timeline-item">
                <img src="../../images/timelinevector.png" alt="icon" />
                <p>
                    2020
                </p>
            </div> */}
        </Slider>
      );
}

export default Slider3;