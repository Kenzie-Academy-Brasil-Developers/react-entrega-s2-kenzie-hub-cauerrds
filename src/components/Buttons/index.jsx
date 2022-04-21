import { Container } from "./styles";

const Button = ({
  children,
  backGround,
  textColor,
  backGroundHover,
  ...rest
}) => {
  return (
    <Container
      type="button"
      backGround={backGround}
      textColor={textColor}
      backGroundHover={backGroundHover}
      {...rest}
    >
      {children}
    </Container>
  );
};
export { Button };
