import { Container } from "./styles";

const Button = ({
  children,
  backGround,
  textColor,
  backGroundHover,
  icon: Icon,
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
      {Icon && <Icon />}
    </Container>
  );
};
export { Button };
