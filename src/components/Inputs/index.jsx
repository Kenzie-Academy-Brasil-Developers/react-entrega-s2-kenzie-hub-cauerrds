import { Container, InputContainer } from "./styles";

const Input = ({ label, icon, ...rest }) => {
  return (
    <Container>
      <div>{label}</div>
      <InputContainer>
        <input {...rest} />
      </InputContainer>
    </Container>
  );
};
export { Input };
