import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider2 = ({children}) => {
  const settings = {
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: '8%',
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  );
};

export default Slider2;