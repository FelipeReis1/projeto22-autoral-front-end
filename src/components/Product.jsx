import styled from "styled-components";

export default function Product({ product }) {
  return (
    <StyledProductSelection>
      <StyledProduct>
        <h1>{product.name}</h1>
        <img src={product.image}></img>
        <h1>{product.description}</h1>
        <h1>Float: {product.itemQuality}</h1>
        <h1>R$: {product.price},00</h1>
        <h1>{product.category}</h1>
      </StyledProduct>
    </StyledProductSelection>
  );
}

const StyledProductSelection = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const StyledProduct = styled.li`
  width: 145px;
  height: 209px;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    margin-bottom: 5px;
  }
  img {
    width: 129px;
    height: 193px;
    &:hover {
      cursor: pointer;
    }
  }
`;
