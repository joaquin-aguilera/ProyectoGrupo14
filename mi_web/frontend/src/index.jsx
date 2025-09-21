import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Principal from "./components/Principal";
import LoginFuncionario from "./components/LoginFuncionario";
import LoginForm from "./components/LoginForm";
import DashboardFuncionario from "./components/DashboardFuncionario";
import FormularioTurno from "./components/FormularioTurno";
import Dashboard from "./components/Dashboard";
import "@fontsource/inria-sans";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/login" element={<LoginFuncionario />} />
        <Route path="/login-form" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard-funcionario" element={<DashboardFuncionario />} />
        <Route path="/formulario" element={<FormularioTurno />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
