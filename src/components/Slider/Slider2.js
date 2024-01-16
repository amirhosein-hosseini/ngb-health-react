import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slider2 = () => {
  const settings = {
    centerMode: true,
    centerPadding: '20%',
    slidesToShow: 1,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
  };

  return (
    <Slider {...settings}>
      <div className='my-second-slider-item'>
        <img src='../../images/0image.png' alt='image' />
      </div>
      <div className='my-second-slider-item'>
        <img src='../../images/0image.png' alt='image' />
      </div>
      <div className='my-second-slider-item'>
        <img src='../../images/0image.png' alt='image' />
      </div>
      <div className='my-second-slider-item'>
        <img src='../../images/0image.png' alt='image' />
      </div>
      <div className='my-second-slider-item'>
        <img src='../../images/0image.png' alt='image' />
      </div>
      <div className='my-second-slider-item'>
        <img src='../../images/0image.png' alt='image' />
      </div>
      <div className='my-second-slider-item'>
        <img src='../../images/0image.png' alt='image' />
      </div>
    </Slider>
  );
};

export default Slider2;