import React from 'react';
import Slider from 'react-slick';

var settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'gray'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block', background: 'gray'}}
      onClick={onClick}
    ></div>
  );
}

const Carousel = () => {
  return (
    <Slider {...settings}>
      <div><img src='http://placekitten.com/g/600/400' /></div>
      <div><img src='http://placekitten.com/g/400/400' /></div>
      <div><img src='http://placekitten.com/g/600/400' /></div>
      <div><img src='http://placekitten.com/g/600/400' /></div>
      <div><img src='http://placekitten.com/g/600/400' /></div>
      <div><img src='http://placekitten.com/g/600/400' /></div>
    </Slider>
  );
}

export default Carousel;
