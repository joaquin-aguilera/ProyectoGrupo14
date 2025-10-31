import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginGeneral from "./pages/LoginGeneral";
import LoginSelection from "./pages/LoginSelection";
import LoginFuncionario from "./pages/LoginFuncionario";
import LoginAdministrador from "./pages/LoginAdministrador";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginGeneral />} />
        <Route path="/LoginSelection" element={<LoginSelection />} />
        <Route path="/loginFuncionario" element={<LoginFuncionario />} />
        <Route path="/loginAdministrador" element={<LoginAdministrador />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;