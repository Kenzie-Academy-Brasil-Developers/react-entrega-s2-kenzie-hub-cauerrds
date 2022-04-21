import { Container, InputContainer } from "./styles";

const Inputs = ({ label, icon: Icon, ...rest }) => {
  return (
    <Container>
      <div className="label">{label}</div>
      <InputContainer>
        <input {...rest} />
        {Icon && <Icon />}
      </InputContainer>
    </Container>
  );
};
export { Inputs };
