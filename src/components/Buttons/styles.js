import styled from "styled-components";

export const Container = styled.button`
  height: 40px;
  background-color: ${(props) => props.backGround};
  color: ${(props) => props.textColor};
  border-radius: 4px;

  :hover {
    background-color: ${(props) => props.backGroundHover};
  }
`;
