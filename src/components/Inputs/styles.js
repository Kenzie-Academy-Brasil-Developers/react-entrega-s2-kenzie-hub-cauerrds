import styled from "styled-components";

export const Container = styled.div`
  text-align: left;
`;

export const InputContainer = styled.div`
  background: var(--grey3);
  border-radius: 4px;
  border: 2px solid var(--grey3);
  color: var(--grey5);
  width: 100%;
  display: flex;
  align-items: center;
  padding-right: 1rem;
  /* transition: ; */
  &:focus-within {
    border: 2px solid var(--grey5);
  }

  input {
    width: 100%;
    height: 38px;
    background: transparent;
    align-items: center;
    flex: 1;
    border: 0;
    padding: 1rem;
    color: var(--white);
    &::placeholder {
      color: var(--grey4);
      font-size: 0.8rem;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: var(--white);
    -webkit-box-shadow: none;
    transition: background-color 86400s;
  }

  svg {
    color: var(--greyFont);
    cursor: pointer;
  }
`;
