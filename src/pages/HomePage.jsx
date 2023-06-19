import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import styled from "styled-components";
import Header from "../components/Header";
export default function HomePage() {
  const [products, setProducts] = useState(undefined);

  useEffect(() => {
    const promise = axios.get("http://localhost:5000/");
    promise.then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
    promise.catch((error) => alert(error.response.data));
  }, []);
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledProductSelection>
          {products && products.map((p) => <Product product={p} />)}
        </StyledProductSelection>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #111111;
  margin-top: 64px;
`;
const StyledProductSelection = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 20px;
`;
