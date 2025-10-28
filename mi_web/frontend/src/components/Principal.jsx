import React from "react";
import "../Principal.css";
import "@fontsource/inria-sans";
import { useNavigate } from "react-router-dom";

export default function Principal() {
  const navigate = useNavigate();
  const funcionarios = Array.from({ length: 8 }, (_, i) => `Funcionario ${i + 1}`);

  return (
    <div className="vista1-container">
      {/* Banner */}
      <div className="banner">
        <div className="logo" style={{ backgroundImage: "url('/image.png')" }}></div>
        <div className="portal-title">Portal de Medicamentos ELEAM</div>
        <div className="botones-container">
          <button className="btn-login" onClick={() => navigate("/login")}>Iniciar Sesión</button>
          <button className="btn-diagnostico" onClick={() => navigate("/login-form")}>Diagnóstico Paciente</button>
        </div>
      </div>

      {/* Funcionarios */}
      <div className="funcionarios-container">
        {funcionarios.map((nombre, index) => (
          <div key={index} className="funcionario">
            <div
              className="foto-funcionario"
              style={{ backgroundImage: "url('/funcionarios.png')" }}
            ></div>
            <div className="nombre-funcionario">{nombre}</div>
          </div>
        ))}
      </div>
    </div>
  );
}