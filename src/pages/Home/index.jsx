import { AnimationContainer, Container } from "./styles";
import { Content } from "./styles";

import logo from "../../assets/logo.svg";
import { FaEye } from "react-icons/fa";

import { Inputs } from "../../components/Inputs";
import { Button } from "../../components/Buttons";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";

const Home = () => {
  const history = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email inválido")
      .required("Campo Obrigatorio!")
      .max(35),
    password: yup.string().required("Senha Obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFnc = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo Kenzie-hub" />
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFnc)}>
            <h1>Login</h1>
            <Inputs
              register={register}
              name="email"
              label="Email"
              placeholder="caue_rrds@kenzie.com"
            />
            <Inputs
              register={register}
              name="password"
              icon={FaEye}
              type="password"
              label="Senha"
              placeholder="Sua senha"
            />
            <Button
              type="submit"
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
              onClick={() => history("/cadastro")}
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
