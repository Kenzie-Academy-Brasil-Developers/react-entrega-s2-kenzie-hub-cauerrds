import { useParams } from "react-router";

const Home = () => {
  const { username } = useParams();
  return <div>Bem vindo {username}</div>;
};
export { Home };
