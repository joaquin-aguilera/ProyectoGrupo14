import { useState } from "react";

export default function LoginForm() {
  const [rut, setRut] = useState("");
  const [fecha, setFecha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/residentes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rut, fecha }),
      });
      if (response.ok) alert("Datos enviados correctamente");
    } catch (error) {
      console.error("Error enviando datos:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#D9D9D9] flex flex-col items-center">
      {/* Banner */}
      <header className="w-full h-[96px] bg-[#E4E4E4] border border-black/50 flex items-center justify-center relative">
        <img src="/image.png" alt="Logo ELEAM" className="h-[73px] mr-2" />
        <h1 className="text-[#1B9AA4] font-bold text-3xl">Red ELEAM</h1>
      </header>

      {/* Contenedor login */}
      <div className="w-[689px] mt-20 bg-white/70 border border-black/40 rounded-[42px] p-10 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10 text-center">Portal de Medicamentos ELEAM</h2>
        <form className="w-full flex flex-col items-center gap-5" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Ingrese RUN del residente"
            value={rut}
            onChange={(e) => setRut(e.target.value)}
            className="w-[554px] h-[50px] border border-black rounded-md px-4 text-lg"
            required
          />
          <input
            type="date"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-[554px] h-[50px] border border-black rounded-md px-4 text-lg"
            required
          />
          <button
            type="submit"
            className="w-[426px] h-[44px] bg-[#1B9AA4] text-white text-2xl font-bold rounded-md mt-5 hover:bg-[#157e85]"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
}
