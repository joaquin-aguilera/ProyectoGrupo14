import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Buscar() {
  const [residente, setResidente] = useState({ rut: "", nombre: "Pendiente de BD" });
  const location = useLocation();

  // Obtener el rut desde la query string
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const rutQuery = params.get("rut");
    if (rutQuery) setResidente(prev => ({ ...prev, rut: rutQuery }));
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-300 flex flex-col items-center">
      {/* Banner */}
      <header className="w-full h-24 bg-gray-200 border-b border-black flex items-center justify-center gap-4">
        <img src="/image.png" alt="Logo ELEAM" className="w-18 h-18 object-contain" />
        <h1 className="text-3xl font-bold text-teal-600">Red ELEAM</h1>
      </header>

      <main className="flex flex-col items-center mt-10 w-full max-w-[1200px]">
        <h2 className="text-4xl font-bold text-center mb-10">Portal de Medicamentos ELEAM</h2>

        {/* Datos del residente */}
        <div className="bg-white bg-opacity-70 border border-black rounded-2xl p-6 w-full mb-10 flex gap-6">
          <div className="w-36 h-36 bg-gray-200 border border-black rounded-md flex-shrink-0"></div>
          <div className="flex flex-col justify-center text-lg font-mono gap-2">
            <p><b>Nombre residente:</b> {residente.nombre}</p>
            <p><b>RUN:</b> {residente.rut}</p>
            <p><b>Próximo control:</b> ..................</p>
            <p><b>Médico tratante:</b> ..................</p>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex flex-col gap-4 mb-10">
          <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded">
            📄 Ver Ficha Clínica
          </button>
          <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded">
            ℹ️ Información Control Anterior
          </button>
          <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded">
            💊 Información Medicamentos
          </button>
          <button className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-bold py-4 px-8 rounded">
            🚪 Salir
          </button>
        </div>

        {/* Diagnóstico */}
        <div className="bg-white bg-opacity-70 border border-black rounded-2xl p-6 w-full">
          <h3 className="text-2xl font-bold text-center mb-6">Diagnóstico Residente</h3>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 font-mono text-lg flex flex-col gap-2">
              <p><b>Diagnóstico:</b> .......................................</p>
              <p><b>Médico que indica:</b> ......................</p>
            </div>
            <div className="flex-1 font-mono text-lg flex flex-col gap-2">
              <p><b>Nombre Medicamento (Compuesto):</b> ....</p>
              <p><b>Dosis:</b> ..... cada ......</p>
              <p><b>Caso SOS:</b> .......................</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
