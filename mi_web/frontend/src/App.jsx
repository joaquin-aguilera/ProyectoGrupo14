import React, { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [usuario, setUsuario] = useState(null);

  const handleLogin = (rut, fecha) => {
    setUsuario({ rut, fecha });
  };

  return <>{!usuario ? <Login onLogin={handleLogin} /> : <Dashboard usuario={usuario} />}</>;
}

export default App;