import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [rut, setRut] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("http://127.0.0.1:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ rut, fecha }),
    });

    const data = await res.json();
    console.log("Servidor respondió:", data);

    onLogin(rut, fecha);
  };

  return (
    <div className="login-page">
      <header className="banner">
        <div className="logo-container">
          <img src="/img/logo.png" alt="Logo ELEAM" className="logo" />
          <h1 className="logo-text">Red ELEAM</h1>
        </div>
      </header>

      <h2 className="bienvenida">¡Te damos la bienvenida!</h2>

      <div className="login-box">
        <h3 className="title">Portal de Medicamentos ELEAM</h3>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese RUN del residente"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            required
          />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            required
          />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  );
}
