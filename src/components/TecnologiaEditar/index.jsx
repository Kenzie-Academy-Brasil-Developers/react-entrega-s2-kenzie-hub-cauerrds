import { Inputs } from "../Inputs";
import { Content } from "./styles";
import { Container } from "./styles";

import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Buttons";
import { IoMdClose } from "react-icons/io";
import { api } from "../../services/api";
import { toast } from "react-toastify";

const options = [
  { value: "Iniciante", label: "Iniciante" },
  { value: "Intermediário", label: "Intermediário" },
  { value: "Avançado", label: "Avançado" },
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

const TecnologiaEditar = ({
  handleClick,
  idTecnologia,
  tecnologias,
  handletecnologias,
}) => {
  const tecnologia = tecnologias.find((tec) => tec.id === idTecnologia);
  const schema = yup.object().shape({
    status: yup.string().required("Campo Obrigatório!"),
  });

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmitFnc = ({ status }) => {
    const data = { status };
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    api
      .put(`/users/techs/${idTecnologia}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        handletecnologias();
        handleClick();
        toast.success("Tecnologia editada!");
      });
  };

  const deletar = () => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));
    api
      .delete(`/users/techs/${idTecnologia}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        handletecnologias();
        handleClick();
        toast.success("Tecnologia deletada!");
      })
      .catch((err) => toast.error("Ops! Algo deu errado"));
  };

  return (
    <Container>
      <Content>
        <div className="tituloDiv">
          <h1>Editar Tecnologia</h1>
          <IoMdClose onClick={handleClick} />
        </div>
        <form onSubmit={handleSubmit(onSubmitFnc)}>
          <Inputs
            register={register}
            name="title"
            label="Nome"
            placeholder={tecnologia.title}
            disabled
          />
          <div className="selectStatusDiv">
            <p>
              Selecionar status
              {errors.status ? (
                <span> - {errors.status?.message}</span>
              ) : (
                ""
              )}{" "}
            </p>
            <Controller
              control={control}
              render={({ field: { onChange, value, name, ref } }) => (
                <Select
                  theme={optionsTheme}
                  value={options.find((status) => status.value === value)}
                  options={options}
                  name={"status"}
                  onChange={(options) => {
                    onChange(options.value);
                  }}
                  placeholder="Status"
                  isSearchable
                />
              )}
              name={"status"}
            />
          </div>
          <div className="buttonsDiv">
            <Button
              type="submit"
              backGround="#59323F"
              textColor="#FFFFFF"
              backGroundHover="#FF427F"
            >
              Salvar alterações
            </Button>
            <Button
              type="button"
              onClick={deletar}
              backGround="#868E96"
              textColor="#F8F9FA"
              backGroundHover="#343B41"
            >
              Excluir
            </Button>
          </div>
        </form>
      </Content>
    </Container>
  );
};

export { TecnologiaEditar };
