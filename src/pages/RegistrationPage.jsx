import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import csgologin from "../assets/img/csgologin.png";

export default function RegistrationPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  function createUser(e) {
    e.preventDefault();

    const request = {
      name: name,
      email: email,
      password: password,
    };
    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      alert("Senhas não são iguais, tente novamente!");
    }
    const promise = axios.post("http://localhost:5000/auth/signup", request);
    promise.then(() => {
      navigate("/signin");
    });
    promise.catch((error) => {
      if (error.message === "Network Error") {
        alert(error.message);
      }
      const errorMessage =
        error.response.data.message + ": " + error.response.data.details;
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      alert(errorMessage);
    });
  }

  return (
    <StyledContainer>
      <StyledTitle>CSGO Skins</StyledTitle>
      <StyledForm onSubmit={createUser}>
        <input
          required
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          required
          type="password"
          placeholder="Confirme a senha"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <StyledButton type="submit">Cadastrar</StyledButton>
        <Link to={"/signin"} style={{ textDecoration: "none" }}>
          <p>Já tem uma conta? Entre agora!</p>
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
    font-size: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
