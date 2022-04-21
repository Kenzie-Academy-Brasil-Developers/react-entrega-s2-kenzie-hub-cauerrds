import { AnimationContainer, Container } from "./styles";
import { Content } from "./styles";

import logo from "../../assets/logo.svg";
import { FaEye } from "react-icons/fa";

import { Inputs } from "../../components/Inputs";
import { Button } from "../../components/Buttons";

const Home = () => {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo Kenzie-hub" />
        <AnimationContainer>
          <form>
            <h1>Login</h1>
            <Inputs label="Email" placeholder="caue_rrds@kenzie.com" />
            <Inputs
              icon={FaEye}
              type="password"
              label="Senha"
              placeholder="Sua senha"
            />
            <Button
              backGround="#FF577F"
              textColor="#FFFFFF"
              backGroundHover="#FF427F"
            >
              Entrar
            </Button>
          </form>
          <div className="cadastroDiv">
            <p>Ainda não possui uma conta?</p>
            <Button
              backGround="#868E96"
              textColor="#F8F9FA"
              backGroundHover="#343B41"
            >
              Cadastre-se
            </Button>
          </div>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export { Home };
