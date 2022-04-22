import { useParams } from "react-router";

import { Button } from "../../components/Buttons";
import { TecnologiaCadastro } from "../../components/ TecnologiaCadastro";

import { Container, Header, DataHeader, Content } from "./styles";
import logo from "../../assets/logo.svg";
import { BiPlusMedical } from "react-icons/bi";

import { useState } from "react";

const Home = () => {
  const { username } = useParams();
  const [showTecnologiaCadastro, setShowTecnologiaCadastro] = useState(false);

  const handleClick = () => {
    setShowTecnologiaCadastro(!showTecnologiaCadastro);
  };

  return (
    <Container>
      {showTecnologiaCadastro && <TecnologiaCadastro />}
      <Header>
        <div className="headerDiv">
          <img src={logo} alt="Logo Kenzie-hub" />
          <Button
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
          <h2>Modulo salvo no storage</h2>
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
          <div className="listaDiv"></div>
        </div>
      </Content>
    </Container>
  );
};
export { Home };
