import { Button } from "../../components/Buttons";
import { Inputs } from "../../components/Inputs";
import { AnimationContainer, Container, Content } from "./styles";

import logo from "../../assets/logo.svg";
import { FaEye } from "react-icons/fa";

import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router";
import { api } from "../../services/api";
import { toast } from "react-toastify";
import { useEffect } from "react";

const options = [
  { value: "Primeiro módulo (Introdução ao Frontend)", label: "Modulo 1" },
  { value: "Segundo módulo (Frontend Avançado)", label: "Modulo 2" },
  { value: "Terceiro módulo (Introdução ao Backend)", label: "Modulo 3" },
  { value: "Quarto módulo (Backend Avançado)", label: "Modulo 4" },
];
const optionsTheme = (theme) => {
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

const Cadastro = ({ autenticacao, setAutenticacao }) => {
  const history = useNavigate();

  const schema = yup.object().shape({
    name: yup.string().required("Campo Obrigatorio!"),
    email: yup
      .string()
      .email("Email inválido")
      .required("Campo Obrigatorio!")
      .max(35),
    password: yup
      .string()
      .required("Campo Obrigatório!")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$",
        "Senha deve conter no mínimo 8 caracteres, um maiúsculo, um minúsculo, um número e um caractere especial"
      ),
    passwordConfirm: yup
      .string()
      .required("Campo Obrigatório!")
      .oneOf([yup.ref("password"), null], "Confirmação deve ser igual a senha")
      .matches(
        "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$",
        "Senha deve conter no mínimo 8 caracteres, um maiúsculo, um minúsculo, um número e um caractere especial"
      ),
    course_module: yup.string().required("Campo Obrigatorio!"),
    contact: yup.string().required("Campo Obrigatorio!"),
    bio: yup.string().required("Campo Obrigatorio!").max(200),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFnc = ({
    name,
    email,
    password,
    contact,
    bio,
    course_module,
  }) => {
    const user = { name, email, password, contact, bio, course_module };
    api
      .post("/users", user)
      .then((response) => {
        toast.success("Conta criada com sucesso!");
        history(`/home/${response.data.name}`);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  if (autenticacao) {
    const user = JSON.parse(localStorage.getItem("@kenzieHub:user"));

    history(`/home/${user.name}`);
  }

  return (
    <Container>
      <Content>
        <div className="logoDiv">
          <img src={logo} alt="Logo Kenzie-hub" />
          <Button
            backGround="#212529"
            textColor="#F8F9FA"
            backGroundHover="#343B41"
            onClick={() => history("/")}
          >
            Voltar
          </Button>
        </div>
        <AnimationContainer>
          <form onSubmit={handleSubmit(onSubmitFnc)}>
            <h1>Crie sua conta</h1>
            <h2>Rapido e grátis, vamos nessa</h2>
            <Inputs
              register={register}
              name="name"
              label="Nome"
              placeholder="Ex: Cauê Rafael"
              error={errors.name?.message}
            />

            <Inputs
              register={register}
              name="email"
              label="Email"
              placeholder="Ex: caue_rrds@kenzie.com"
              error={errors.email?.message}
            />
            <Inputs
              register={register}
              name="password"
              icon={FaEye}
              type="password"
              label="Senha"
              placeholder="Sua senha"
              error={errors.password?.message}
            />
            <Inputs
              register={register}
              name="passwordConfirm"
              icon={FaEye}
              type="password"
              label="Confirmar senha"
              placeholder="Confirme sua senha"
              error={errors.passwordConfirm?.message}
            />
            <div className="selectDiv">
              <p>
                Selecione seu módulo
                {errors.course_module ? (
                  <span> - {errors.course_module?.message}</span>
                ) : (
                  ""
                )}
              </p>

              <Controller
                control={control}
                render={({ field: { onChange, value, name, ref } }) => (
                  <Select
                    theme={optionsTheme}
                    value={options.find(
                      (course_module) => course_module.value === value
                    )}
                    options={options}
                    name={"course_module"}
                    onChange={(options) => {
                      onChange(options.value);
                    }}
                    placeholder="Selecione o seu módulo"
                    isSearchable
                  />
                )}
                name={"course_module"}
              />
            </div>
            <Inputs
              register={register}
              name="contact"
              label="Contato"
              placeholder="Ex: www.linkedin.com/in/cau%C3%AA-rafael-rodrigues-dos-santos-3b7a84157"
              error={errors.contact?.message}
            />
            <div className="bioDiv">
              <label htmlFor="bio">
                Sobre você{" "}
                {errors.bio ? (
                  <span> - {errors.course_module?.message}</span>
                ) : (
                  ""
                )}{" "}
              </label>
              <textarea
                name={"bio"}
                {...register("bio")}
                placeholder="Fale um pouco sobre você"
              />
            </div>
            <Button
              type="submit"
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
