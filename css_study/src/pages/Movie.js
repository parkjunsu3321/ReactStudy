import React, { useState } from "react";
import styled from "styled-components";

const ProductBox = styled.div`
  width: 150px;
  height: 200px;
  background-color: lightblue;
  border-radius: 8px;
  transition: all 0.5s ease;

  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:hover {
    width: 200px;
    height: 270px;
  }
`;

const ProductContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px;
  padding-left: 40px;
  justify-content: left;
  background-color: #f9f9f9;
  border-bottom: 0.1px solid lightgray;
  padding-bottom: 20px;
`;

const DetailsContainer = styled.div`
  margin-top: 10px;
  color: black;
  border-radius: 5px;
  font-size: 14px;
  display: inline-block;
  opacity: 0;
  visibility: hidden;
  max-height: 0;
  overflow: hidden;
  transition: opacity 1s ease, visibility 0s 0.1s, max-height 1s ease;

  ${({ isHovered }) => isHovered && `
    opacity: 1;
    visibility: visible;
    max-height: 200px;
    transition: opacity 1s ease, visibility 0s 0s, max-height 1s ease;
  `}
`;

const LengthBox = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
`;

const Movie = () => {
  let a = "<상세설명>"
  const [name] = useState([
    {
      title: "오징어 게임",
      time: "2021.09.17",
      description: "오징어 게임은 2021년 9월 17일 넷플릭스에서 공개된 한국 드라마로, 경제적 어려움에 처한 사람들이 참가하는 죽음의 게임을 배경으로 한 긴장감 넘치는 이야기입니다. 이 드라마는 여러 참가자들이 생존을 위해 치열하게 경쟁하는 가운데, 그들의 내면적인 갈등과 인간성을 탐구하는 내용입니다. 이 드라마의 주요 배경은 고립된 섬에서 진행되는 서바이벌 게임이며, 참가자들은 어린 시절의 놀이를 변형한 게임을 통해 목숨을 걸고 경쟁합니다. 게임은 단순한 오락이 아니라, 각자의 삶에 절박한 상황에 놓인 사람들이 생존을 위해 서로 싸우는 잔혹한 장면을 담고 있습니다. 게임에 참가한 인물들은 각자의 과거와 고통을 가지고 있으며, 그들이 게임을 통해 겪는 갈등과 선택의 순간은 드라마의 핵심적인 테마를 형성합니다. '오징어 게임'은 삶과 죽음의 경계를 넘나드는 상황에서 인간의 본성과 도덕적 갈등을 깊이 있게 탐구합니다. 드라마는 또한 경제적 불평등과 사회적 문제를 비판하며, 참가자들이 겪는 극단적인 상황 속에서 인간성을 잃지 않으려는 모습을 보여줍니다. '오징어 게임'은 강렬한 서스펜스와 감정적인 요소를 결합하여 전 세계적으로 큰 인기를 끌었으며, 시청자에게 강한 인상을 남겼습니다."
    },
    {
      title: "조명가게",
      time: "2024.12.04",
      description: "조명가게는 2024년 12월 4일 디즈니+에서 공개된 한국 드라마로, 이승과 저승을 이어주는 신비한 조명 가게를 배경으로 한 독특한 이야기입니다. 이 드라마는 강풀 작가의 동명의 웹툰을 원작으로 하며, 산자와 망자의 이야기의 교차를 그립니다. 이 드라마의 주요 배경은 일반적인 조명 판매점이 아닌, 이승과 저승을 연결하는 역할을 하는 가게입니다. 가게 안에 있는 조명은 단순한 장식이 아니라, 산자와 망자 간의 소통을 가능하게 하는 중요한 매개체로 등장합니다. 이곳을 찾은 사람들은 과거의 상처나 후회가 남아 있는 인물들로, 조명을 통해 저승의 인물들과 대화를 나누며 갈등을 해결하고 미련을 풀어 나갑니다. 드라마는 사람들의 감정선과 심리적 갈등을 중심으로 전개되며, 후회와 구속이라는 깊은 주제를 다룹니다. 산자와 망자가 교차하면서 그들의 감정적 해소와 삶의 의미를 찾아가는 과정을 그린 이 드라마는, 인간 관계의 복잡성과 그 안에서의 갈등을 풀어나갑니다. '조명가게'는 이승과 저승을 연결하는 독특한 설정을 통해 감정적이고 철학적인 질문을 던지며, 시청자에게 큰 감동을 선사할 것입니다."
    },
    {
      title: "사랑의 불시착",
      time: "2019.12.14",
      description: "사랑의 불시착은 2019년 12월 14일 tvN에서 방송된 한국 드라마로, 남한의 재벌 상속녀가 북한에 불시착하면서 벌어지는 로맨스를 그린 작품입니다. 이 드라마는 남한과 북한을 배경으로 하여, 서로 다른 정치적 체제 속에서 살아가는 두 사람의 사랑 이야기를 중심으로 전개됩니다. 주인공은 남한의 재벌 상속녀인 윤세리로, 패러글라이딩 도중 사고를 당해 북한에 불시착하게 됩니다. 그곳에서 그녀는 북한 군인 리정혁과 만난 뒤, 점차 두 사람은 서로에게 끌리게 됩니다. 이 드라마의 핵심은 북한과 남한의 갈등을 배경으로 한 로맨스와 두 주인공이 직면하는 위험 속에서 그들이 서로를 지키기 위한 노력입니다. 드라마는 남북한을 넘나드는 로맨스를 그리며, 서로 다른 사회적 배경과 정치적 이념 속에서 피어나는 사랑을 보여줍니다. 또한, 드라마는 전개 속에서 남북한 사람들의 다채로운 성격과 사연을 묘사하며, 각 등장인물들의 인생과 갈등을 섬세하게 그려냅니다. '사랑의 불시착'은 로맨스를 중심으로 한 이야기지만, 남북한 관계와 그 속에서 살아가는 사람들의 이야기를 감동적으로 풀어내어 큰 인기를 끌었습니다. 이 드라마는 사회적, 정치적 문제를 다루면서도 사람들 간의 사랑과 신뢰를 중요하게 그린 작품으로, 전 세계에서 많은 팬들을 형성했습니다."
    },
    {
      title: "나의 해방일지",
      time: "2022.04.09",
      description: "나의 해방일지는 2022년 4월 9일 tvN에서 방송된 한국 드라마로, 주인공이 자신과의 싸움을 통해 진정한 해방을 찾는 과정을 그린 작품입니다. 이 드라마는 복잡한 사회적 관계와 개인적인 갈등 속에서 자아를 찾아가는 여정을 그리며, 등장인물들의 내면적인 성장과 인간 관계의 변화를 중심으로 전개됩니다. 주인공은 자신의 삶에서 의미를 찾기 위해 고군분투하며, 그의 성장과 갈등을 통해 삶의 진정한 의미를 탐구합니다. 드라마는 현실적인 문제들을 진지하게 다루면서도, 등장인물들이 일상적인 삶에서 겪는 소소한 순간들을 따뜻하게 그려내어 감동을 줍니다."
    },
    {
      title: "치얼업",
      time: "2022.10.03",
      description: "드라마 치얼업은 2022년 10월 3일 방송된 한국 드라마로, 대학 응원단의 이야기와 청춘들의 열정적인 삶을 그린 작품입니다. 이 드라마는 응원단원들이 팀워크와 열정을 바탕으로 어려움을 극복해 나가는 과정을 그리며, 열정적이고 긍정적인 메시지를 전달합니다. 등장인물들은 각자의 문제를 해결하며 성장해 가고, 이를 통해 서로를 이해하고 존중하는 관계를 형성하게 됩니다. '치얼업'은 사회적 메시지와 인간 관계를 중요한 테마로 삼아, 고난을 이겨내는 청춘들의 이야기를 그립니다."
    },
    {
      title: "눈물의 여왕",
      time: "2022.05.09",
      description: "눈물의 여왕은 2022년 5월 9일 방송된 한국 드라마로, 주인공이 잃어버린 사랑을 찾아가는 과정을 그린 작품입니다. 이 드라마는 그리움과 회복, 복수와 용서라는 복합적인 감정을 다루며, 등장인물들이 지나온 상처와 갈등을 극복하는 이야기를 그립니다. 주인공은 사랑하는 사람을 잃은 뒤, 그 사람을 찾기 위한 여정을 떠나게 됩니다. 드라마는 감정적으로 깊이 있는 이야기와 캐릭터들의 성장을 그려내며, 시청자들에게 큰 감동을 선사합니다."
    }
  ]);  
  const [hoveredData, setHoveredData] = useState(null);

  const handleMouseEnter = (data) => {
    setHoveredData(data);
  };

  const handleMouseLeave = () => {
    setHoveredData(null);
  };

  return (
    <div>
      {name.map((data, i) => (
        <ProductContainer key={i}>
          <ProductBox
            imageUrl={data.title.replace(/\s+/g, "") + ".png"}
            onMouseEnter={() => handleMouseEnter(data)}
            onMouseLeave={handleMouseLeave}
          />
          <LengthBox>          
            <div>이름 : {data.title}</div>
            <div>방영시기 : {data.time}</div>
            <DetailsContainer isHovered={hoveredData === data}>
              <h3>{a}</h3>
              {hoveredData === data && data.description}
            </DetailsContainer>
          </LengthBox>
        </ProductContainer>
      ))}
    </div>
  );
};

export default Movie;