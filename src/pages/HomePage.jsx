import styled from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledContainer>ESTOU NA HOME PAGE</StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 70px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
