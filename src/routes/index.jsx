import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";

import { Login } from "../pages/Login";

const RoutesComponent = () => {
  const [autenticacao, setAutenticacao] = useState(
    JSON.parse(localStorage.getItem("@KenzieHub:token"))
  );

  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

  //   if (token) {
  //     return setAutenticacao(true);
  //   }
  // }, [autenticacao]);
  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          !autenticacao ? (
            <Login
              autenticacao={autenticacao}
              setAutenticacao={setAutenticacao}
            />
          ) : (
            <Home
              autenticacao={autenticacao}
              setAutenticacao={setAutenticacao}
            />
          )
        }
      />
      <Route
        exact
        path="/cadastro"
        element={
          !autenticacao ? (
            <Cadastro
              autenticacao={autenticacao}
              setAutenticacao={setAutenticacao}
            />
          ) : (
            <Home
              autenticacao={autenticacao}
              setAutenticacao={setAutenticacao}
            />
          )
        }
      />
      <Route
        exact
        path="/home/:username"
        element={
          autenticacao ? (
            <Home
              autenticacao={autenticacao}
              setAutenticacao={setAutenticacao}
            />
          ) : (
            <Navigate replace to="/" />
          )
        }
      />
    </Routes>
  );
};
export { RoutesComponent };
