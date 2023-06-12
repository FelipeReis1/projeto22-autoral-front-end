import axios from "axios";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import styled from "styled-components";
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
    <StyledContainer>
      {products && products.map((p) => <Product product={p} />)}
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: #111111;
`;
