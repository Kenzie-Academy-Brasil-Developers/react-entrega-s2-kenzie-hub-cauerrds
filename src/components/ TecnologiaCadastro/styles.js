import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 342px;
  margin: auto;
  background-color: var(--grey2);

  .tituloDiv {
    height: 50px;
    h1 {
      font-size: 1rem;
      color: var(--white);
    }
  }
  form {
    padding: 1rem;
    .label {
      margin-bottom: 15px;
    }
  }
`;
