import { Container, InputContainer } from "./styles";

const Inputs = ({ label, icon, ...rest }) => {
  return (
    <Container>
      <div className="label">{label}</div>
      <InputContainer>
        <input {...rest} />
      </InputContainer>
    </Container>
  );
};
export { Inputs };
