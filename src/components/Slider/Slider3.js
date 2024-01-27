import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider3 = ({children}) => {
    
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Initial number of slides on a computer device
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 3, // Number of slides to show on a mobile device
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );


}

export default Slider3;