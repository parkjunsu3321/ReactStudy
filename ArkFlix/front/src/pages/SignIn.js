import React, { useState } from "react";
import { styled, keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const slideDown = keyframes`
  0% {
    transform: translateY(-100px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  background: url("main.png") center/cover no-repeat;
  display: flex;
  padding-top: 9%;
  flex-direction: column;
  align-items: center;
  color: #fff;
  font-family: "Arial", sans-serif;
`;

const SignForm = styled.div`
  width: 90%;
  max-width: 400px;
  background-color: rgb(255, 251, 251);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  border-radius: 15px;
  gap: 20px;
  z-index: 2;
  animation: ${slideDown} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 10px;
  color: black;
`;

const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 85%;
  padding: 10px;
  font-size: 1rem;
  color: ${(props) => props.textColor || "blck"};
  background-color: ${(props) => props.bgColor};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    opacity: 0.9;
  }

  img {
    width: 20px;
    height: 20px;
    margin-right: 15px;
  }
`;

const KakaoButton = styled(SocialButton)`
  padding: 10px;
  background-color: #fee500;
  color: #3c1e1e;
`;

const NaverButton = styled(SocialButton)`
  padding: 10px;
  background-color: #1ec800;
  color: white;
`;

const GoogleButton = styled(SocialButton)`
  padding: 10px;
  background-color: white;
  color: black;
  border: 1px solid #ddd;
`;

const CheckBTN = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #e50914;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

const EmailInput = styled.input.attrs((props)=>({
  placeHolder: props.data,
}))`
  padding: 10px;
  font-size: 1rem;
  width: 70%;
  border: 1px solid black;
  border-radius: 5px;
  color: gray;
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

const SignIn = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const handleSocialLogin = (provider) => {
    console.log(`${provider} 소셜 로그인`);
  };

  const handleLogin = async() => {
    const response = await axios.get("http://127.0.0.1:8000/User/login", {params:{"email":id,"password":password}});
    console.log(response.data)
  }

  return (
    <Container>
      <SignForm>
        <Title>로그인</Title>
        <EmailInput onChange={(e) => setId(e.target.value)} type="text" style={{ width: "80%", color: "black" }} data={"아이디"} boolean={true}/>
        <EmailInput onChange={(e) => setPassword(e.target.value)} type="password" style={{ width: "80%", color: "black" }} data={"비밀번호"} boolean={false}/>
        <CheckBTN onClick={()=>handleLogin()} style={{width:"85%"}}>
          로그인
        </CheckBTN>
        <GoogleButton onClick={() => handleSocialLogin("Google")} bgColor="#fff">
          <img src="google.png" alt="Google" />
          Google로 시작하기
        </GoogleButton>
        <KakaoButton onClick={() => handleSocialLogin("Kakao")}>
          <img src="kakao.png" alt="Kakao" />
          Kakao로 시작하기
        </KakaoButton>
        <NaverButton onClick={() => handleSocialLogin("Naver")}>
          <img src="naver.png" alt="Naver" />
          Naver로 시작하기
        </NaverButton>
      </SignForm>
      <BackgroundOverlay />
    </Container>
  );
};

export default SignIn;