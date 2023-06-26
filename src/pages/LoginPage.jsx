import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import csgologin from "../assets/img/csgologin.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setToken, setUser, setUserId } = useContext(UserContext);
  const navigate = useNavigate();

  if (localStorage.getItem("token")) {
    setToken(localStorage.getItem("token"));
    navigate("/");
  }

  function login(e) {
    e.preventDefault();
    const request = {
      email: email,
      password: password,
    };
    const promise = axios.post("http://localhost:5000/auth/signin", request);
    promise.then((res) => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.name);
      localStorage.setItem("userId", res.data.id);
      setUser(res.data.name);
      setToken(res.data.token);
      setUserId(res.data.id);
      navigate("/");
    });
    promise.catch(() => {
      alert("Você não possui uma conta, cadastre-se!");
    });
  }

  return (
    <StyledContainer>
      <StyledTitle>CSGO Skins</StyledTitle>
      <StyledForm onSubmit={login}>
        <input
          required
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          required
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <StyledButton type="submit">Entrar</StyledButton>
        <Link to={"/signup"} style={{ textDecoration: "none" }}>
          <p>Primeira vez? Cadastre-se!</p>
        </Link>
      </StyledForm>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${csgologin});
  @media (min-width: 330px) {
    background-position: center center;
  }
`;
const StyledTitle = styled.h1`
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 50px;
  line-height: 18px;
  color: #02273f;
`;
const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  input {
    width: 326px;
    height: 58px;
    background-color: #ffffff;
    border-radius: 5px;
    border-style: none;
    margin-bottom: 13px;
    &::placeholder {
      font-family: "Ubuntu", sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #000000;
      padding-left: 15px;
    }
  }
  p {
    height: 18px;
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    font-weight: 700;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    font-size: 20px;
    line-height: 18px;
    color: #ffffff;
  }
`;

const StyledButton = styled.button`
  width: 326px;
  height: 46px;
  background-color: #005b96;
  border-radius: 5px;
  border-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  margin-bottom: 36px;
`;
