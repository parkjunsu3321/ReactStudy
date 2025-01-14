import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  position: relative;
  height: 100vh;
  background: url("main.png") center/cover no-repeat;
  display: flex;
  flex-direction: column;
  color: #fff;
  font-family: "Arial", sans-serif;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 2;
  border: 1px solid black;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: #e50914;
`;

const LoginButton = styled.button`
  padding: 10px 20px;
  background-color: #e50914;
  border: none;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

const MainContent = styled.div`
  text-align: center;
  z-index: 2;
  padding: 12% 20px;
  border: 1px solid black;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  line-height: 1.4;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 1.2rem;
  margin-bottom: 20px;
`;

const EmailForm = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const EmailInput = styled.input`
  padding: 10px;
  font-size: 1rem;
  width: 450px;
  border: none;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #e50914;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1;
`;

const Main = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (email) {
      navigate("/SignUp", { state: { email } });
    }
  };

  const handleLogin = () => {
    navigate("/SignIn")
  }

  return (
    <Container>
      <Header>
        <Logo>ARKFLIX</Logo>
        <div>
          <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </div>
      </Header>
      <MainContent>
        <Title>
          영화, 시리즈 등의 정보를
          <br />
          무한으로 즐겨요
        </Title>
        <Text>
          회원가입을 하거나 재시작하려면 이메일 주소를
          입력하세요.
        </Text>
        <EmailForm>
          <EmailInput
            type="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <SubmitButton onClick={handleStart}>시작하기</SubmitButton>
        </EmailForm>
      </MainContent>
      <BackgroundOverlay />
    </Container>
  );
};

export default Main;