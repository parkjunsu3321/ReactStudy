import React from "react";
import styled from "styled-components";

const Card = () => {
  return (
    <StyledCardContainer>
      <StyledCard>
        <div className="content">Card</div>
      </StyledCard>
    </StyledCardContainer>
  );
};

const StyledCardContainer = styled.div`
  perspective: 1200px; /* 3D 깊이 효과 */
`;

const StyledCard = styled.div`
  width: 200px;
  height: 300px;
  background-color: #4caf50;
  color: white;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transform-style: preserve-3d;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);

  & .content {
    font-size: 20px;
    text-align: center;
  }
`;

function Test() {
  return (
    <div className="Test">
      <Card />
    </div>
  );
}

export default Test;