import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';


const NumeroMesas = () => {
  const [selectedMesa, setSelectedMesa] = useState(null);

  const handleMesaClick = (mesa) => {
    setSelectedMesa(mesa);
  };

  const navigate = useNavigate();

    const handleSiguiente = () => {
        navigate('/home/reservaMesa/detalles');     
    };

    const handleAnterior = () => {
      navigate('/home/reservaMesa/FechaHora');     
  };

  return (
    <>
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Selecciona una Mesa</h2>

      {/* Bolitas de mesas */}
      <div className="grid grid-cols-4 gap-4">
        {Array.from({ length: 12 }, (_, i) => i + 1).map((mesa) => (
          <div
            key={mesa}
            onClick={() => handleMesaClick(mesa)}
            className={`w-16 h-16 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ${selectedMesa === mesa
                ? "bg-orange-500 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
              }`}
          >
            {mesa}
          </div>
        ))}
      </div>

      {/* Mostrar mesa seleccionada */}
      <div className="mt-6 text-center">
        {selectedMesa ? (
          <p className="text-lg font-semibold">
            Mesa seleccionada: <span className="text-orange-500">{selectedMesa}</span>
          </p>
        ) : (
          <p className="text-lg text-gray-500">No se ha seleccionado ninguna mesa</p>
        )}
      </div>
    </div>
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
    </>
    
  );
};

export default NumeroMesas;