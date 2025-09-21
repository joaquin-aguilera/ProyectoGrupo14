import React from "react";
import "../DashboardFuncionario.css";
import { useNavigate } from "react-router-dom";

export default function DashboardFuncionario() {
    const navigate = useNavigate();
    const funcionario = {
    nombre: "Juan Pérez",
    email: "juan.perez@eleam.chile.cl",
    tipo: "Administrador",
    turno: "Mañana",
    horaIngreso: "08:00",
    residentesVisitados: "10",
    emergencias: "No",
    realizadoSOS: "Sí"
  };

  return (
    <div className="dashboard-container">
      {/* Banner */}
      <div className="banner">
        <div className="logo-container">
          <div className="logo"
          style={{ backgroundImage: "url('/image.png')" }}></div>
          <div className="red-eleam">Red ELEAM</div>
        </div>
        <div className="portal-title">Portal ELEAM</div>
        <div className="bell-icon"
        style={{ backgroundImage: "url('/campana.png')" }}></div>
      </div>

      {/* Contenedor principal */}
      <div className="dashboard-main">
        {/* Parte izquierda */}
        <div className="left-panel">
          {/* Datos del funcionario */}
          <div className="funcionario-box">
            <h2>Bienvenido {funcionario.nombre}!</h2>
            <div className="funcionario-info">
              <p>Nombre: {funcionario.nombre}</p>
              <p>Email: {funcionario.email}</p>
              <p>Tipo: {funcionario.tipo}</p>
              <p>Turno: {funcionario.turno}</p>
              <p>Hora de ingreso: {funcionario.horaIngreso}</p>
            </div>
          </div>

          {/* Formulario Turno Anterior */}
          <div className="funcionario-box turno-anterior">
            <h2>Formulario Turno Anterior</h2>
            <div className="funcionario-info">
              <p>Residentes Visitados: {funcionario.residentesVisitados}</p>
              <p>Emergencias: {funcionario.emergencias}</p>
              <p>Realizado en SOS: {funcionario.realizadoSOS}</p>
            </div>
          </div>
        </div>

        {/* Parte derecha */}
        <div className="right-panel">
          <button className="button" onClick={() => navigate("/formulario")}>Ingresar Formulario</button>
          <button className="button">Consultar Formulario</button>
          <button className="button">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
}
