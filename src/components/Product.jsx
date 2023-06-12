import styled from "styled-components";

export default function Product({ product }) {
  return (
    <StyledProductSelection>
      <StyledProduct>
        <h1>{product.name}</h1>
        <img src={product.image}></img>
        <h1>{product.description}</h1>
        <h1>Float: {product.itemQuality}</h1>
        <h1>Preço: R${product.price},00</h1>
        <h1>Categoria: {product.category}</h1>
      </StyledProduct>
    </StyledProductSelection>
  );
}

const StyledProductSelection = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const StyledProduct = styled.li`
  width: 300px;
  height: 403px;
  box-shadow: 0px 4px 6px 4px rgba(46, 12, 126, 0.1);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-image: linear-gradient(to bottom, #2c2a35, #3b2632);
  h1 {
    font-size: 23px;
    margin-bottom: 5px;
    color: white;
  }
  img {
    width: 256px;
    height: 256px;
    &:hover {
      cursor: pointer;
    }
  }
`;
