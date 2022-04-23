import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  background-color: rgb(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  max-width: 342px;
  margin: auto;
  background-color: var(--grey2);
  margin-top: 225px;
  border-radius: 4px;

  .tituloDiv {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--grey3);
    padding: 1rem;
    h1 {
      font-size: 1rem;
      color: var(--white);
    }
    svg {
      color: var(--white);
      &:hover {
        cursor: pointer;
      }
    }
  }
  form {
    padding: 1rem;
    .label {
      margin-bottom: 15px;
      color: var(--white);
    }
    p {
      margin: 15px 0;
      color: var(--white);
    }
    button {
      width: 100%;
      margin-top: 15px;
    }
    .selectStatusDiv {
      color: var(--white);
      svg {
        color: #ffffff;
      }
    }
  }
`;
