import React from "react";
import Slider from "react-slick";

import './Carousel.scss'

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true
  }

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img className='carousel_img' src='https://a-static.besthdwallpaper.com/pitstsa-oboi-1600x600-3519_84.jpg' alt='img'/>
        </div>
        <div>
          <img className='carousel_img' src='https://a-static.besthdwallpaper.com/pitstsa-oboi-1600x600-3519_84.jpg' alt='img'/>
        </div>
        <div>
          <img className='carousel_img' src='https://a-static.besthdwallpaper.com/pitstsa-oboi-1600x600-3519_84.jpg' alt='img'/>
        </div>
        <div>
          <img className='carousel_img' src='https://a-static.besthdwallpaper.com/pitstsa-oboi-1600x600-3519_84.jpg' alt='img'/>
        </div>
        <div>
          <img className='carousel_img' src='https://a-static.besthdwallpaper.com/pitstsa-oboi-1600x600-3519_84.jpg' alt='img'/>
        </div>
        <div>
          <img className='carousel_img' src='https://a-static.besthdwallpaper.com/pitstsa-oboi-1600x600-3519_84.jpg' alt='img'/>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel