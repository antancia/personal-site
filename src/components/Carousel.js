import React from 'react';
import Slider from 'react-slick';
import '../styles/Carousel.css';

var settings = {
  dots: true,
  infinite: true,
  centerMode: true,
  centerPadding: 0,
  accessibility: true,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  // responsive: [{breakpoint: 500, settings: {autoplay: false, slidesToShow: 1}}],
};

function NextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{display: 'block', background: 'gray', borderRadius: '50%'}}
      onClick={onClick}
    ></div>
  );
}

function PrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{display: 'block', background: 'gray', borderRadius: '50%'}}
      onClick={onClick}
    ></div>
  );
}

class Carousel extends React.Component {
  componentWillMount() {
    // crappy workaround so that the media query in react-slick will properly
    // find the window size on first load
    this.forceUpdate();
  }

  render(){
    return (
      <div className="slick-container">
        <Slider {...settings}>
          <div><img alt="kitten" src='http://placekitten.com/g/600/400' /></div>
          <div><img alt="kitten" src='http://placekitten.com/g/400/400' /></div>
          <div><img alt="kitten" src='http://placekitten.com/g/600/400' /></div>
          <div><img alt="kitten" src='http://placekitten.com/g/600/400' /></div>
          <div><img alt="kitten" src='http://placekitten.com/g/400/400' /></div>
          <div><img alt="kitten" src='http://placekitten.com/g/600/400' /></div>
        </Slider>
      </div>
    );
  }
}

export default Carousel;
