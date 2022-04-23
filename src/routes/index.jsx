import { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";

import { Login } from "../pages/Login";

const RoutesComponent = () => {
  const [autenticacao, setAutenticacao] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      return setAutenticacao(true);
    }
  }, []);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          <Login
            autenticacao={autenticacao}
            setAutenticacao={setAutenticacao}
          />
        }
      />
      <Route
        exact
        path="/cadastro"
        element={
          <Cadastro
            autenticacao={autenticacao}
            setAutenticacao={setAutenticacao}
          />
        }
      />
      <Route
        exact
        path="/home/:username"
        element={<Home autenticacao={autenticacao} />}
      />
    </Routes>
  );
};
export { RoutesComponent };
