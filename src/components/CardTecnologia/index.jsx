import { Container } from "./styles";

const CardTecnologia = ({ tecnologia, handleClickEditar, teste }) => {
  return (
    <Container teste={teste} onClick={handleClickEditar} id={tecnologia.id}>
      <h1>{tecnologia.title}</h1>
      <h2>{tecnologia.status}</h2>
    </Container>
  );
};
export { CardTecnologia };
