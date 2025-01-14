import styled from "styled-components";
import { useState } from "react";

const Banner = styled.div`
  width: 100%;
  height: 350px; 
  background-image: url("/banner.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const MainContaier = styled.div`
  height: 100vh;
  background-color: #343a40;
`;

const ItemContainer = styled.div`
  display: flex; 
  justify-content: space-around;
  width: 100%;
  flex-direction: row;
`;

const ItemBox = styled.div`
  justify-content: space-around;
  background-color: black;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  margin: 30px;
  width: 200px;
  height: 300px;
  transition: all 0.7s ease;
  border-radius: 30px;

  &:hover{
    border-radius: 0px;
    width: 250px;
    height: 400px;
  }
`;

const Shopping = () => {
  const [img, setImg] = useState("조명가게.png");
  const [arrayimg] = useState(['치얼업.png', '나의해방일지.png', '눈물의여왕.png']);
  const [sliderTimer, setSliderTimer] = useState(null);

  const handleSlider = () => {
    let i = 0;
    const init_data = img;
    const interval = setInterval(() => {
      setImg(arrayimg[i]);
      i++;
      if (i === arrayimg.length) {
        clearInterval(interval);
        setTimeout(() => {
          setImg(init_data);
        }, 1500); 
      }
    }, 1500); 
    setSliderTimer(interval);
  };

  const handleInit = () => {
    if (sliderTimer) clearInterval(sliderTimer);
    setImg("조명가게.png");
  };

  return(
    <MainContaier>
      <Banner />
      <ItemContainer>
        <ItemBox 
          imageUrl={img} 
          onMouseOver={handleSlider} 
          onMouseOut={handleInit} 
        />
        <ItemBox imageUrl={"/치얼업.png"} />
        <ItemBox imageUrl={"/나의해방일지.png"} />
        <ItemBox imageUrl={"/오징어게임.png"} />
        <ItemBox imageUrl={"/눈물의여왕.png"} />
        <ItemBox imageUrl={"/눈물의여왕.png"} />
        <ItemBox imageUrl={"/눈물의여왕.png"} />
      </ItemContainer>
    </MainContaier>
  );
};

export default Shopping;
