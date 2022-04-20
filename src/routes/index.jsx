import { Routes, Route } from "react-router";

import { Home } from "../pages/Home";

const RoutesComponent = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  );
};
export { RoutesComponent };
