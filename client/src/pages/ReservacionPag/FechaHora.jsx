import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

const CalendarioReservas = () => {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [mesActual, setMesActual] = useState(0);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState(null);


  const meses = [
    {
      nombre: "Noviembre 2024",
      dias: [
        null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
      ],
    },
    {
      nombre: "Diciembre 2024",
      dias: [
        null, null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
      ],
    },
    {
      nombre: "Enero 2025",
      dias: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, null, null, null, null, null, null,
      ],
    },
    {
      nombre: "Febrero 2025",
      dias: [
        null, null, null, null, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
      ],
    },
  ];

  const horarios = ["12:00 pm", "12:30 pm", "13:00 pm", "13:30 pm", "14:00 pm"];

  const navigate = useNavigate();

  const handleSiguiente = () => {
      navigate('/home/reservaMesa/numeroMesas');     
  };

  const handleAnterior = () => {
      navigate('/home/reservaMesa/numeroPersonas');
  };

  const renderMes = () => {
    const { nombre, dias } = meses[mesActual];
    return (
      <div>
        <h2 className="text-black text-xl font-semibold mb-4 text-center">{nombre}</h2>
        <div className="grid grid-cols-7 gap-2">
          {["Lun", "Mar", "Mie", "Jue", "Vie", "Sáb", "Dom"].map((dia, index) => (
            <div key={index} className="text-center text-black font-bold">
              {dia}
            </div>
          ))}
          {dias.map((dia, index) => (
            <div
              key={index}
              className={`text-center h-10 flex items-center justify-center rounded ${fechaSeleccionada === `${nombre} ${dia}` ? "bg-black text-white" : "text-black"
                }`}
              onClick={() => dia && setFechaSeleccionada(`${nombre} ${dia}`)}
            >
              {dia || ""}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
    <div className="min-h-screen p-8 bg-gray-100">
      <h1 className="text-black text-2xl font-bold mb-4">Selecciona una fecha</h1>
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setMesActual((mesActual - 1 + meses.length) % meses.length)}
          className="text-black font-bold px-4 py-2 border-2 border-black rounded-full"
          disabled={mesActual === 0}
        >
          &#8249;
        </button>

        <div className="flex-grow text-center">{renderMes()}</div>

        <button
          onClick={() => setMesActual((mesActual + 1) % meses.length)}
          className="text-black font-bold px-4 py-2 border-2 border-black rounded-full"
          disabled={mesActual === meses.length - 1}
        >
          &#8250;
        </button>
      </div>


      <div className="mt-8">
        <h2 className="text-black text-xl font-semibold mb-4">Selecciona un horario</h2>
        <div className="flex flex-wrap gap-4">
          {horarios.map((hora) => (
            <button
              key={hora}
              onClick={() => setHorarioSeleccionado(hora)}
              className={`px-4 py-2 rounded-full border-2 ${horarioSeleccionado === hora ? "bg-black text-white" : "border-black text-black"
                }`}
            >
              {hora}
            </button>
          ))}
        </div>
      </div>
    </div>
    <div>
    <button
          onClick={handleAnterior}
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"

      >
          Anterior
      </button>
      <button
          onClick={handleSiguiente}
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"

      >
          Siguiente
      </button>
    </div>
    </>
  );
};

export default CalendarioReservas;
