import React, { useEffect, useState } from "react";

export default function Dashboard({ usuario }) {
  const [residentes, setResidentes] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/residentes")
      .then((res) => res.json())
      .then((data) => setResidentes(data));
  }, []);

  return (
    <div>
      <header className="banner">
        <div className="logo-container">
          <img src="/img/logo.png" alt="Logo ELEAM" className="logo" />
          <h1 className="logo-text">Red ELEAM</h1>
        </div>
      </header>

      <div className="dashboard-container">
        <div className="dashboard-card">
          <h3>Bienvenido {usuario.rut}</h3>
          <p>Fecha ingresada: {usuario.fecha}</p>
        </div>

        <div className="dashboard-card">
          <h3>Lista de residentes:</h3>
          <ul>
            {residentes.map((r) => (
              <li key={r[0]}>
                {r[1]} - {r[2]}
              </li>
            ))}
          </ul>
        </div>

        <div className="dashboard-buttons">
          <button>Ver Ficha Clínica</button>
          <button>Información Control Anterior</button>
          <button>Información Medicamentos</button>
          <button>Salir</button>
        </div>
      </div>
    </div>
  );
}