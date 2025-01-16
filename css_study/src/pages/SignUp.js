import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {styled, keyframes} from "styled-components";

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
  border-radius: 5px;
`;

const MainContent = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 2;
  padding: 10% 20px;
  height: 100%;
`;

const EmailForm = styled.div`
  display: flex;
  width: 85%;
  height:10%;
  align-items: center;
  justify-content: space-around;
  gap: 10px;
  color: black;
`;

const EmailInput = styled.input.attrs((props)=>({
  placeHolder: props.data,
  readOnly: props.boolean,
}))`
  padding: 10px;
  font-size: 1rem;
  width: 70%;
  border: 1px solid black;
  border-radius: 5px;
  color: gray;
`;

const SignForm = styled.div`
  width: 25%;
  height: 100%;
  background-color: rgb(255, 251, 251);
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  gap: 5%;
  animation: ${slideDown} 1s ease-out;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  line-height: 1.4;
  color: black;
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

const CheckBTN = styled.button`
  padding: 10px;
  font-size: 1rem;
  background-color: #e50914;
  border: none;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
`;

const SignUp = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state || {};
    const handleLogin = () => {
        navigate("/SignIn")
    }
    const handlHome = () => {
      navigate("/");
    };
    return (
      <Container>
        <Header>
            <Logo onClick={handlHome}>ARKFLIX</Logo>
            <div>
                <LoginButton onClick={handleLogin}>로그인</LoginButton>
            </div>
        </Header>
        <MainContent>
            <SignForm>
                <Title>
                    회원가입
                </Title>
                <EmailForm>
                  <EmailInput data={"닉네임"} boolean={false}/>
                  <CheckBTN>
                    중복확인
                  </CheckBTN>
                </EmailForm>
                <EmailInput type="text" style={{ width: "80%", color: "black" }} data={email} boolean={true}/>
                <EmailInput type="password" style={{ width: "80%", color: "black" }} data={"비밀번호"} boolean={false}/>
                <EmailInput type="password" style={{ width: "80%", color: "black" }} data={"비밀번호 확인"} boolean={false}/>
                <EmailInput type="password" style={{ width: "80%", color: "black" }} data={"비밀번호 확인"} boolean={false}/>
                <CheckBTN style={{width:"85%"}}>가입하기</CheckBTN>
            </SignForm>
        </MainContent>
        <BackgroundOverlay />
      </Container>
    );
};
export default SignUp;