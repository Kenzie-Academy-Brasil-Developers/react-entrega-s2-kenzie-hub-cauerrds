import { AnimationContainer, Container } from "./styles";
import { Content } from "./styles";

import logo from "../../assets/logo.svg";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { Inputs } from "../../components/Inputs";
import { Button } from "../../components/Buttons";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const Login = ({ autenticacao, setAutenticacao }) => {
  const history = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [inputShow, setInputShow] = useState("password");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
    setInputShow("text");
    if (inputShow === "text") {
      setInputShow("password");
    }
  };

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

  const onSubmitFnc = ({ email, password }) => {
    const user = {
      email,
      password,
    };

    api
      .post("/sessions", user)
      .then((response) => {
        toast.success("Login efetuado com sucesso");
        history(`/home/${response.data.user.name}`);
        const { token } = response.data;
        localStorage.clear();
        localStorage.setItem(
          "@kenzieHub:user",
          JSON.stringify(response.data.user)
        );
        localStorage.setItem("@KenzieHub:token", JSON.stringify(token));
        setAutenticacao(true);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email ou Senha invalido");
      });
  };

  if (autenticacao) {
    const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));
    if (user) {
      history(`/home/${user.name}`);
    }
  }

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
              handleShowPassword={handleShowPassword}
              register={register}
              name="password"
              icon={showPassword ? FaEye : FaEyeSlash}
              type={inputShow}
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
export { Login };
