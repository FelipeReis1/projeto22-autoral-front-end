import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import Header from "../components/Header";
import { FaTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function CartPage() {
  const [cartProducts, setCartProducts] = useState(undefined);
  const cartString = localStorage.getItem("cart");
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_APP_API_URL;

  useEffect(() => {
    const cart = JSON.parse(cartString);
    const promise = axios.get(`${apiURL}/cart/${cart.id}`);
    promise.then((res) => {
      console.log(res.data);
      setCartProducts(res.data);
    });
  }, []);

  if (!cartProducts) {
    return <StyledContainer>Loading</StyledContainer>;
  }

  function deleteCart() {
    const cart = JSON.parse(cartString);
    const promise = axios.delete(`${apiURL}/cart/${cart.id}`);
    promise.then((res) => {
      setCartProducts(undefined);
      localStorage.removeItem("cart");
      alert("Carrinho removido com sucesso!");
      navigate("/");
    });
    promise.catch((err) => {
      alert(err.message);
    });
  }

  return (
    <>
      <Header />
      {Number(userId) === cartProducts.userId ? (
        <StyledContainer>
          <StyledCartHeader>
            <h1>Seu carrinho</h1>
            <StyledTrash onClick={deleteCart} />
          </StyledCartHeader>
          <StyledCartSubHeader>
            <h1>Produto</h1>
            <h1>Preço</h1>
            <h1>Quantidade</h1>
            <h1>Total</h1>
          </StyledCartSubHeader>
          <StyledDivisor />
          <StyledCartContainer>
            <p>
              <img src={cartProducts.products.image} /> <br />
              <h2>
                <span>Nome: </span>
                {cartProducts.products.name}
              </h2>
              <h2>
                <span>Categoria: </span>
                {cartProducts.products.category}
              </h2>
            </p>
            <p>R${cartProducts.products.price}</p>
            <p>{cartProducts.amount}</p>
            <p>R${cartProducts.products.price}</p>
            <StyledButton>Finalizar Compra</StyledButton>
          </StyledCartContainer>
        </StyledContainer>
      ) : (
        <StyledContainer>
          <h2>Adicione produtos ao carrinho!</h2>
        </StyledContainer>
      )}
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #111111;
  margin-top: 64px;
  flex-direction: column;
  align-items: center;
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
  h2 {
    font-size: 75px;
    color: white;
    margin-top: 350px;
  }
`;

const StyledCartHeader = styled.div`
  width: 90%;
  height: 60px;
  display: flex;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  background-color: #3b2632;
  margin-top: 20px;
  h1 {
    font-size: 28px;
    font-weight: bold;
    color: white;
    margin-left: 10px;
  }
`;

const StyledCartSubHeader = styled.div`
  width: 90%;
  display: flex;
  height: 35px;
  justify-content: space-around;
  align-items: center;
  background-color: #d8d8d8;
  h1 {
    font-size: 23px;
    font-weight: bold;
    width: 300px;
  }
`;
const StyledDivisor = styled.div`
  border: 1px solid black;
`;

const StyledCartContainer = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #d8d8d8;
  border-radius: 3px;
  font-size: 23px;
  position: relative;
  img {
    width: 100px;
    height: 100px;
  }
  p {
    width: 300px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  h2 {
    font-family: "Ubuntu", sans-serif;
    font-style: normal;
    margin-top: 5px;
    color: black;
    font-size: 23px;
  }

  span {
    font-weight: bold;
  }
`;

const StyledTrash = styled(FaTrashAlt)`
  width: 50px;
  height: 25px;
  fill: white;
  :hover {
    cursor: pointer;
  }
`;

const StyledButton = styled.button`
  width: 130px;
  height: 30px;
  border-radius: 5px;
  border-style: none;
  background-color: green;
  font-weight: bold;
  color: white;
  position: absolute;
  bottom: 5px;
  right: 263px;
  :hover {
    cursor: pointer;
  }
`;
