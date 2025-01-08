import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.header`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282c34;
  color: white;
  padding: 10px 20px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #4B77D8;
  font-family: 'Poppins', sans-serif;
`;

const Sign = styled.nav`
  display: flex;
  gap: 15px;
`;

const SignLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s ease;

  &:hover {
    color: #61dafb;
  }
`;

const SearchContainer = styled.div`
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 300px;
`;

const SearchInput = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 400px;
  &:focus {
    outline: none;
    border-color: #61dafb;
  }
`;

const CartIcon = styled.div`
  border: 1px solid #ccc;
  font-size: 25px;
  cursor: pointer;
  color: white;
  
  &:hover {
    color: #61dafb;
  }
`;

const SearchDrop = styled.select`
  border: 1px solid #ccc;
  padding: 5px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  color: #282c34;
  transition: all 0.5s ease;

  &:focus {
    outline: none;
    border-color: #61dafb;
  }
  
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>React 마켓</Logo>
      <SearchContainer>
        <SearchDrop>
          <option value="">거래 종류</option>
          <option value="buy">구매</option>
          <option value="sell">판매</option>
        </SearchDrop>
        <SearchInput type="text" placeholder="검색어를 입력하세요" />
        <CartIcon>🍳</CartIcon>
      </SearchContainer>
      <Sign>
        <SignLink href="/signin">로그인</SignLink>
        <SignLink href="/signup">회원가입</SignLink>
      </Sign>
    </HeaderContainer>
  );
};

export default Header;