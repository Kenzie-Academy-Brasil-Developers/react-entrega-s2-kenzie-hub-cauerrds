import { Routes, Route } from "react-router";
import { Cadastro } from "../pages/Cadastro";
import { Home } from "../pages/Home";

import { Login } from "../pages/Login";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Login />} />
      <Route exact path="/cadastro" element={<Cadastro />} />
      <Route exact path="/home/:username" element={<Home />} />
    </Routes>
  );
};
export { RoutesComponent };
