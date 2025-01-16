import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  z-index: 2;
  background-color: black;
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

const Header = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
      navigate("/SignIn");
    };

    const handlHome = () => {
        navigate("/");
    };

    return(
    <HeaderContainer>
        <Logo onClick={handlHome}>ARKFLIX</Logo>
        <div>
            <LoginButton onClick={handleLogin}>로그인</LoginButton>
        </div>
    </HeaderContainer>
    );
}

export default Header;