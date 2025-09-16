import "../Dashboard.css";
import { useLocation } from "react-router-dom";

export default function Dashboard() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const rut = queryParams.get("rut");

  return (
    <div className="dashboard-container">
      {/* Banner */}
      <div className="banner">
        <div
          className="logo"
          style={{ backgroundImage: "url('/image.png')" }}
        ></div>
        <div className="portal-title">Portal de Medicamentos ELEAM</div>
      </div>

      {/* Datos residente */}
      <div className="datos-residente">
        <div className="foto-residente"></div>
        <div className="info-residente">
          <p>Nombre residente: ..................................</p>
          <p>RUN: {rut}</p>
          <p>Médico tratante: ....................</p>
          <p>Próximo control: dd/mm/aaaa</p>
        </div>
      </div>

      {/* Botones de acción */}
      <div className="botones-accion">
        <div className="boton">Ver Ficha Clínica</div>
        <div className="boton">Información Control Anterior</div>
        <div className="boton">Información Medicamentos</div>
        <div className="boton">Salir</div>
      </div>

      {/* Diagnóstico */}
      <div className="diagnostico">
        <h3>Diagnóstico Residente</h3>
        <div className="diagnostico-detalle">
          <div>
            <p>Diagnóstico: ..............................................</p>
            <p>Médico que indica: ......................................</p>
          </div>
          <div>
            <p>Nombre Medicamento (Compuesto): ..................</p>
            <p>Dosis: ..... cada ......</p>
            <p>Caso SOS: .............................................</p>
          </div>
        </div>
      </div>
    </div>
  );
}
