import styled from "styled-components";
import { FaCartArrowDown } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";

export default function Header() {
  const { setToken, setUser, setUserId } = useContext(UserContext);
  const name = localStorage.getItem("user");
  const cartString = localStorage.getItem("cart");
  const navigate = useNavigate();

  function logout() {
    if (cartString) {
      const cart = JSON.parse(cartString);
      const promise = axios.delete(`http://localhost:5000/cart/${cart.id}`);
      promise.then(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("cart");
        setToken("");
        setUser(undefined);
        setUserId(undefined);
        alert("Volte sempre!");
        navigate("/");
      });
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setToken("");
      setUser(undefined);
      setUserId(undefined);
      alert("Volte sempre!");
      navigate("/");
    }
  }

  function goToCart() {
    const cartString = localStorage.getItem("cart");
    if (cartString) {
      const cart = JSON.parse(cartString);
      console.log(cart.id);
      navigate(`/cart/${cart.id}`);
    } else {
      alert("Adicione produtos para visualizar o carrinho!");
    }
  }

  return (
    <StyledHeader>
      <>
        {name ? (
          <h1>Bem vindo(a), {name}!</h1>
        ) : (
          <h1>Bem vindo(a), CSGO Player!</h1>
        )}
      </>
      <StyledButton>
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <h1>Home</h1>
        </Link>
      </StyledButton>
      {name ? (
        <></>
      ) : (
        <StyledButton>
          <Link to={"/signin"} style={{ textDecoration: "none" }}>
            <h1>Sign-in</h1>
          </Link>
        </StyledButton>
      )}
      {name ? (
        <></>
      ) : (
        <StyledButton>
          <Link to={"/signup"} style={{ textDecoration: "none" }}>
            <h1>Sign-up</h1>
          </Link>
        </StyledButton>
      )}

      <StyledButton onClick={logout}>Logout</StyledButton>
      <StyledCart onClick={goToCart}>
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
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  top: 0;
  left: 0;
  h1 {
    color: white;
  }
`;

const StyledButton = styled.button`
  width: 85px;
  height: 30px;
  border-radius: 5px;
  background-color: transparent;
  font-weight: bold;
  color: white;
  :hover {
    cursor: pointer;
  }
`;

const StyledCart = styled(FaCartArrowDown)`
  width: 50px;
  height: 25px;
  fill: white;
  :hover {
    cursor: pointer;
  }
`;
