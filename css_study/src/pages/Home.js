import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const Slider = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0; /* 배경 색상 */
`;

const SlideImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const Home = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      autoPlay={true}
    >
      <Slider onClick={() => { window.location.href = '/movie' }}>
        <SlideImg imageUrl='/movie.png'/>
      </Slider>
      <Slider>
        <SlideImg>슬라이드 2 내용</SlideImg>
      </Slider>
      <Slider>
        <SlideImg>슬라이드 3 내용</SlideImg>
      </Slider>
    </Carousel>
  );
};

export default Home;