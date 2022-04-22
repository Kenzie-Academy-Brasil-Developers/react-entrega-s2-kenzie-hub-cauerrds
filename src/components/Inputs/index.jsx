import { Container, InputContainer } from "./styles";

const Inputs = ({ label, icon: Icon, register, name, error, ...rest }) => {
  return (
    <Container>
      <div className="label">
        {label}
        {!!error && <span> - {error}</span>}
      </div>
      <InputContainer>
        <input {...register(name)} {...rest} />
        {Icon && <Icon />}
      </InputContainer>
    </Container>
  );
};
export { Inputs };
