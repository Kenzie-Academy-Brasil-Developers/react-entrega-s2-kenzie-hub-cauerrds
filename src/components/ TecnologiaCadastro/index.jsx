import { Inputs } from "../Inputs";
import { Content } from "./styles";
import { Container } from "./styles";

import Select from "react-select";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../Buttons";
import { AiOutlineClose } from "react-icons/ai";

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

const TecnologiaCadastro = () => {
  const schema = yup.object().shape({
    title: yup.string().required("Campo Obrigatório!"),
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

  const onSubmitFnc = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Content>
        <div className="tituloDiv">
          <h1>Cadastrar Tecnologia</h1>
          {/* <span>{AiOutlineClose}</span> */}
        </div>
        <form onSubmit={handleSubmit(onSubmitFnc)}>
          <Inputs
            register={register}
            name="title"
            label="Nome"
            placeholder="Ex: Javascript"
            //   error={errors.name?.message}
          />
          <div className="selectStatusDiv">
            <p>Selecionar status</p>
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
          <Button
            type="submit"
            backGround="#59323F"
            textColor="#FFFFFF"
            backGroundHover="#FF427F"
          >
            Cadastrar Tecnologia
          </Button>
        </form>
      </Content>
    </Container>
  );
};

export { TecnologiaCadastro };
