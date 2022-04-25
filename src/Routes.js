import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Configuracao from "./pages/Configuracao";
import Logout from "./pages/Logout";

export default function Myfunc() {
  return (
    // <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/configuracao" element={<Configuracao />} />
      <Route exact path="/logout" element={<Logout />} />
    </Routes>
    // </BrowserRouter>
  );
}
