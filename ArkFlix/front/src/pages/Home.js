import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
  background-color: rgb(0, 0, 0);
`;

const ImageComponents = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background-image: url('2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, transparent 40%, rgba(0,0,0,0.7) 70%, black 100%);
`;

const TestComponents = styled.div`
  width: 50%;
  height: 90vh;
  z-index: 1;
`;

const Home = () => {
  return (
    <MainContent>
      <ImageComponents>
        <GradientOverlay />
        <TestComponents>asd</TestComponents>
        <TestComponents>zxczxc</TestComponents>
      </ImageComponents>
    </MainContent>
  );
};

export default Home;
