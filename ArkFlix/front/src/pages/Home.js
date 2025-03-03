import React from "react";
import styled from "styled-components";

const MainContent = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

const ImageComponents = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('2.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to left, transparent 0%, rgba(0, 0, 0, 0.7) 75%, black 100%);
`;

const NameContainer = styled.div`
  position: relative;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start; /* 위쪽 정렬 */
  align-items: flex-start;
  padding-left: 5%;
  z-index: 1;
  color: white;
  margin-top: -5%; /* 원하는 만큼 올리기 */
  transform: translateY(-10%); /* 추가적인 조정 */
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  white-space: nowrap;
  margin-bottom: 10px;
`;
 
const Info = styled.div`
  font-size: 1rem;
  opacity: 0.8;
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const Content = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  max-width: 80%;
  margin-bottom: 20px;
`;

const Cast = styled.div`
  font-size: 1rem;
  opacity: 0.8;
`;


const Home = () => {
  return (
    <MainContent>
      <ImageComponents>
        <GradientOverlay />
        <NameContainer>
          <Title>경우의 수</Title>
          <Info>2020 | 15+ | 시즌 1개 | 로맨스</Info>
          <Content>
            고등학교 때 만난 우연과 수. 우연은 수를 10년간 짝사랑하며 두 번이나 고백했지만 번번이 차였다.
            수 따윈 완전히 잊겠다고 하지만, 그게 말처럼 쉬울 리가.
            그런데 수도 우연을 좋아하고 있었다면? 두 사람, 10년 동안 삽질한 거야?
          </Content>
          <Cast>주연: 옹성우, 신예은, 김동준</Cast>
          <Cast>크리에이터: 최성범, 조승희</Cast>
        </NameContainer>
      </ImageComponents>
    </MainContent>
  );
};

export default Home;