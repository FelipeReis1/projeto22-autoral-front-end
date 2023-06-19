import styled from "styled-components";
import { FaCartArrowDown } from "react-icons/fa";

export default function Header() {
  return (
    <StyledHeader>
      <StyledLogin>Login</StyledLogin>
      <StyledLogout>Logout</StyledLogout>
      <StyledCart>
        <FaCartArrowDown />
      </StyledCart>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 64px;
  border-bottom: 1px solid #1b0b0b;
  font-size: 22px;
  background-color: #1d1818;
  position: fixed;
  top: 0;
  left: 0;
`;

const StyledLogin = styled.button`
  width: 50px;
  height: 30px;
`;

const StyledLogout = styled.button`
  width: 60px;
  height: 30px;
`;

const StyledCart = styled(FaCartArrowDown)`
  width: 50px;
  height: 25px;
  fill: white;
`;
