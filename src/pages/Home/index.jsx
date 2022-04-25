import { Navigate, useNavigate, useParams } from "react-router";

import { Button } from "../../components/Buttons";
import { TecnologiaCadastro } from "../../components/ TecnologiaCadastro";

import { Container, Header, DataHeader, Content } from "./styles";
import logo from "../../assets/logo.svg";
import { BiPlusMedical } from "react-icons/bi";
import { api } from "../../services/api";

import { useEffect, useState } from "react";
import { CardTecnologia } from "../../components/CardTecnologia";
import { TecnologiaEditar } from "../../components/TecnologiaEditar";

const Home = ({ autenticacao, setAutenticacao }) => {
  const { username } = useParams();
  const [showTecnologiaCadastro, setShowTecnologiaCadastro] = useState(false);
  const [showTecnologiaEditar, setShowTecnologiaEditar] = useState(false);
  const [tecnologias, setTecnologias] = useState([]);
  const [idTecnologia, setIdTecnologia] = useState();
  const history = useNavigate();

  const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));

  const handleClick = () => {
    setShowTecnologiaCadastro(!showTecnologiaCadastro);
  };

  const handleClickEditar = (e) => {
    setShowTecnologiaEditar(!showTecnologiaEditar);
    setIdTecnologia(e.target.id);
  };
  const handleLogOut = () => {
    localStorage.clear();
    setAutenticacao(false);
    history("/");
  };

  const handletecnologias = () => {
    api
      .get(`/users/${user.id}`)
      .then((response) => setTecnologias(response.data.techs))
      .catch((_) => "Ops! Algo deu errado");
  };

  useEffect(() => {
    handletecnologias();
  }, []);

  return (
    <Container>
      {showTecnologiaCadastro && (
        <TecnologiaCadastro
          handletecnologias={handletecnologias}
          handleClick={handleClick}
        />
      )}
      {showTecnologiaEditar && (
        <TecnologiaEditar
          handletecnologias={handletecnologias}
          tecnologias={tecnologias}
          idTecnologia={idTecnologia}
          handleClick={handleClickEditar}
        />
      )}
      <Header>
        <div className="headerDiv">
          <img src={logo} alt="Logo Kenzie-hub" />
          <Button
            onClick={handleLogOut}
            backGround="#212529"
            textColor="#F8F9FA"
            backGroundHover="#343B41"
          >
            Sair
          </Button>
        </div>
      </Header>
      <DataHeader>
        <div className="dataHeaderDiv">
          <h1>Olá, {username}</h1>
          <h2>{user.course_module}</h2>
        </div>
      </DataHeader>

      <Content>
        <div className="contentDiv">
          <div className="tecnologiasDiv">
            <h1>Tecnologias</h1>
            <Button
              backGround="#212529"
              textColor="#F8F9FA"
              backGroundHover="#343B41"
              icon={BiPlusMedical}
              onClick={handleClick}
            ></Button>
          </div>
          <div className="listaDiv">
            {tecnologias.map((tec, i) => {
              return (
                <CardTecnologia
                  key={i}
                  tecnologia={tec}
                  handleClickEditar={handleClickEditar}
                />
              );
            })}
          </div>
        </div>
      </Content>
    </Container>
  );
};
export { Home };
