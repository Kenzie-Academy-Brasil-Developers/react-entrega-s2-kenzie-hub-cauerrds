import { Routes, Route } from "react-router";
import { Cadastro } from "../pages/Cadastro";

import { Home } from "../pages/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Cadastro />} />
    </Routes>
  );
};
export { RoutesComponent };
