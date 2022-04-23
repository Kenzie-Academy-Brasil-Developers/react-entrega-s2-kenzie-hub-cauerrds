import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 1rem;
  align-items: stretch;
  text-align: center;
`;

export const Content = styled.div`
  display: flex;
  row-gap: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 450px;
  margin: auto;

  img {
    width: 100px;
    margin-top: 50px;
  }
`;

const fadeIn = keyframes`
from{
    opacity: 0;  
}
to {
    opacity: 100%;
}
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  animation: ${fadeIn} 1s;
  width: 100%;
  background-color: var(--grey2);
  padding: 1rem;
  border-radius: 4px;
  form,
  .cadastroDiv {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    width: 100%;
    text-align: center;

    font-size: 0.8rem;
    color: var(--white);

    h1 {
      margin: 25px 0;
      color: var(--white);
      font-size: 1rem;
    }

    .label {
      margin-bottom: 10px;
    }
  }

  .cadastroDiv {
    margin: 15px 0;
  }

  button {
    width: 100%;
    font-weight: 500;
  }
  p {
    color: var(--greyFont);
  }
`;
