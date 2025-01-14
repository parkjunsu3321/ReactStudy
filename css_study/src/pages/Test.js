import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const LayoutContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
`;

const NavContainer = styled.div`
  margin-right: 20px;
  width: 300px;
  color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px;
  margin-left: 10%;
  box-sizing: border-box;
`;

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  column-gap: 5%;
  width: 100%;
  max-width: 1300px;
  margin: 20px;
`;

const ItemBox = styled.div`
  width: 200px;
  height: 300px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  text-align: center;
  background-color: lightgray;
  align-items: center;
  margin-top: 0;
  border-radius: 15px;
`;

const ItemImgWrapper = styled.div`
  width: 90%;
  height: 75%;
  margin-top: 10%;
  overflow: hidden;
  border-radius: 15px;
`;

const ItemImg = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Price = styled.b`
  font-size: 18px;
`;

const ItemDetailsWrapper = styled.div`
  display: flex;
  width: 90%;
  height: 25%;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
`;

const Test = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const splitArray = (arr, size) => {
    const result = [];
    for (let i = 0; i < arr.length; i += size) {
      result.push(arr.slice(i, i + size));
    }
    return result;
  }
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/items")
      .then((response) => {
        console.log(response.data);
        setItems(splitArray(response.data, 4));
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <LayoutContainer>
      <NavContainer>
        <p>상품 올리기</p>
        <p>메뉴 2</p>
        <p>메뉴 3</p>
      </NavContainer>
      <ItemsWrapper>
        {items.map((item, index) => (
          <ItemContainer key={index}>
            {item.map((data) => (
              <ItemBox key={data.name}>
                <ItemImgWrapper>
                  <ItemImg imageUrl={"http://127.0.0.1:8000" + data.image_url} />
                </ItemImgWrapper>
                <ItemDetailsWrapper>
                  <div>{data.name && data.name.length > 16 ? `${data.name.slice(0, 16)}...` : data.name}</div>
                  <Price>{data.price.toLocaleString()}원</Price>
                </ItemDetailsWrapper>
              </ItemBox>
            ))}
          </ItemContainer>
        ))}
      </ItemsWrapper>
    </LayoutContainer>
  );
};

export default Test;