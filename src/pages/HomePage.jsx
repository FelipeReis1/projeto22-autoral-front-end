import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import styled from "styled-components";
import Header from "../components/Header";

export default function HomePage() {
  const [products, setProducts] = useState(undefined);
  const apiURL = import.meta.env.VITE_APP_API_URL;
  useEffect(() => {
    const promise = axios.get(`${apiURL}`);
    promise.then((res) => {
      setProducts(res.data);
    });
    promise.catch((error) => alert(error.response.data));
  }, []);
  return (
    <>
      <Header />
      <StyledContainer>
        <StyledProductSelection>
          {products && products.map((p, i) => <Product product={p} key={i} />)}
        </StyledProductSelection>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #111111;
  margin-top: 54px;
  font-family: "Ubuntu", sans-serif;
  font-style: normal;
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
