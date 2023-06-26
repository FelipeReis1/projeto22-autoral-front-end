import styled from "styled-components";
import { FaCartPlus } from "react-icons/fa";
import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";

export default function Product({ product }) {
  const token = localStorage.getItem("token");
  const { userId } = useContext(UserContext);
  const apiURL = import.meta.env.VITE_APP_API_URL;

  function addToCart() {
    const request = {
      userId: userId,
      productId: product.id,
      amount: 1,
    };
    const promise = axios.post(`${apiURL}/cart/`, request);
    promise.then((res) => {
      console.log(res.data);
      const cartString = JSON.stringify(res.data);
      localStorage.setItem("cart", cartString);
      alert("Produto adicionado com sucesso!");
    });
    promise.catch((err) => {
      if (
        err.response.data === "Quantidade solicitada não disponível em estoque!"
      ) {
        alert(err.response.data);
      } else {
        alert(
          "Não conseguimos adicionar mais de um produto no momento! Delete o carrinho atual."
        );
      }
    });
  }
  return (
    <StyledProduct token={token}>
      <h1>{product.name}</h1>
      <img src={product.image}></img>
      <h1>{product.description}</h1>
      <h1>Float: {product.itemQuality}</h1>
      <h1>Preço: R${product.price},00</h1>
      <h1>Categoria: {product.category}</h1>
      {token ? (
        <StyledAddToCart onClick={addToCart}>
          <FaCartPlus />
        </StyledAddToCart>
      ) : (
        <></>
      )}
    </StyledProduct>
  );
}

const StyledProduct = styled.li`
  width: 270px;
  height: ${(props) => (!props.token ? "380px" : "403px")};
  box-shadow: 0px 4px 6px 4px rgba(46, 12, 126, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3px;
  margin-top: 15px;
  background-image: linear-gradient(to bottom, #2c2a35, #3b2632);
  h1 {
    font-size: 19px;
    margin-bottom: 7px;
    color: white;
  }
  img {
    width: 230px;
    height: 230px;
    &:hover {
      cursor: pointer;
    }
  }
`;

const StyledAddToCart = styled(FaCartPlus)`
  width: 70px;
  height: 25px;
  margin-top: 5px;
  border-radius: 5px;
  fill: green;
  :hover {
    cursor: pointer;
  }
`;
