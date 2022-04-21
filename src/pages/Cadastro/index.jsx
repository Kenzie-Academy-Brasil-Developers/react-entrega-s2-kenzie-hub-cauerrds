import { Button } from "../../components/Buttons";
import { Inputs } from "../../components/Inputs";
import { AnimationContainer, Container, Content } from "./styles";

import logo from "../../assets/logo.svg";
import { FaEye } from "react-icons/fa";

import Select from "react-select";

const options = [
  { value: "Modulo 1", label: "Modulo 1" },
  { value: "Modulo 2", label: "Modulo 2" },
  { value: "Modulo 3", label: "Modulo 3" },
  { value: "Modulo 4", label: "Modulo 4" },
  { value: "Modulo 5", label: "Modulo 5" },
];

const Cadastro = () => {
  const optionsTheme = (theme) => {
    console.log(theme);
    return {
      ...theme,

      colors: {
        danger: "transparent",
        dangerLight: "transparent",
        neutral0: "#343B41",
        neutral5: "transparent",
        neutral10: "transparent",
        neutral20: "transparent",
        neutral30: "#FFFFFF",
        neutral40: "#FFFFFF",
        neutral50: "#FFFFFF",
        neutral60: "#FFFFFF",
        neutral70: "hsl(0, 0%, 30%)",
        neutral80: "#FFFFF",
        neutral90: "transparent",
        primary: "#868E96",
        primary25: "#868E96",
        primary50: "#FFFFFF",
        primary75: "transparent",
      },
    };
  };

  return (
    <Container>
      <Content>
        <div className="logoDiv">
          <img src={logo} alt="Logo Kenzie-hub" />
          <Button
            backGround="#212529"
            textColor="#F8F9FA"
            backGroundHover="#343B41"
          >
            Voltar
          </Button>
        </div>
        <AnimationContainer>
          <form>
            <h1>Crie sua conta</h1>
            <h2>Rapido e grátis, vamos nessa</h2>
            <Inputs label="Nome" placeholder="Ex: Cauê Rafael" />

            <Inputs label="Email" placeholder="Ex: caue_rrds@kenzie.com" />
            <Inputs
              icon={FaEye}
              type="password"
              label="Senha"
              placeholder="Sua senha"
            />
            <Inputs
              icon={FaEye}
              type="password"
              label="Confirmar senha"
              placeholder="Confirme sua senha"
            />
            <div className="selectDiv">
              <p>Selecione seu módulo</p>
              <Select
                theme={optionsTheme}
                options={options}
                placeholder="Selecione o seu módulo"
                isSearchable
              />
            </div>
            <Button
              backGround="#59323F"
              textColor="#FFFFFF"
              backGroundHover="#FF427F"
            >
              Cadastrar
            </Button>
          </form>
        </AnimationContainer>
      </Content>
    </Container>
  );
};
export { Cadastro };
