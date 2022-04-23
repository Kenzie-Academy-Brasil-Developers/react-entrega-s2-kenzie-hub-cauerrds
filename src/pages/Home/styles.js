import styled from "styled-components";

export const Container = styled.div`
  background-color: var(--grey1);
  width: 100vw;
`;

export const Header = styled.header`
  width: 100%;
  padding: 1rem;
  .headerDiv {
    margin: auto;
    padding: 1rem;
    max-width: 1100px;
    display: flex;
    justify-content: space-between;
    button {
      width: 56px;
      height: 40px;
    }
  }
`;

export const DataHeader = styled.div`
  width: 100%;
  padding: 0 1rem;
  border-bottom: 2px solid var(--grey2);
  border-top: 2px solid var(--grey2);
  height: 120px;

  .dataHeaderDiv {
    padding: 1rem;
    margin: auto;
    max-width: 1100px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: 100%;

    h1 {
      font-size: 18px;
      font-weight: 700;
      color: var(--white);
    }
    h2 {
      font-size: 0.8rem;
      color: var(--greyFont);
    }

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

export const Content = styled.div`
  width: 100%;

  .contentDiv {
    margin: auto;
    max-width: 1100px;
    padding: 1rem;
    .tecnologiasDiv {
      display: flex;
      justify-content: space-between;
      h1 {
        font-size: 1rem;
        font-weight: 600;
        color: var(--white);
      }
      button {
        width: 30px;
        height: 30px;
      }
    }
    .listaDiv {
      margin-top: 30px;
      padding: 2rem 1rem 2rem 1rem;
      width: 100%;
      background-color: var(--grey2);
      min-height: 200px;
      display: flex;
      flex-direction: column;
      row-gap: 15px;
    }
  }
`;
