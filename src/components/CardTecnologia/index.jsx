import { Container } from "./styles";

const CardTecnologia = ({ tecnologia, handleClickEditar }) => {
  return (
    <Container onClick={handleClickEditar} id={tecnologia.id}>
      <h1>{tecnologia.title}</h1>
      <h2>{tecnologia.status}</h2>
    </Container>
  );
};
export { CardTecnologia };
