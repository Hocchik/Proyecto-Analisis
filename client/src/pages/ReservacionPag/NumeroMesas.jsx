import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const NumeroMesas = () => {
  const [selectedMesa, setSelectedMesa] = useState(null);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleMesaClick = (mesa) => {
    setSelectedMesa(mesa);
    setError(false);
  };

  const handleSiguiente = () => {
    if (!selectedMesa) {
      setError(true);
      return;
    }
    navigate('/home/reservaMesa/detalles');
  };

  const handleAnterior = () => {
    navigate('/home/reservaMesa/FechaHora');
  };

  return (
    <>
      <div className=" p-8 bg-orange-800">
        <h2 className="text-2xl font-bold text-white text-center mb-4">Selecciona una Mesa</h2>

        <div className="grid grid-cols-4 gap-3 place-items-center">
          {Array.from({ length: 12 }, (_, i) => i + 1).map((mesa) => (
            <div
              key={mesa}
              onClick={() => handleMesaClick(mesa)}
              className={`w-12 h-12 flex items-center justify-center rounded-full cursor-pointer transition duration-200 ${selectedMesa === mesa
                ? "bg-black text-white"
                : "bg-white text-black hover:bg-black hover:text-white"
                }`}
            >
              {mesa}
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          {error && (
            <p className="text-black mt-2 font-bold">Por favor, selecciona una mesa antes de continuar.</p>
          )}
          {selectedMesa && !error && (
            <h2 className="text-lg font-bold">
              Mesa seleccionada: nro. <span className="text-black">{selectedMesa}</span>
            </h2>
          )}
        </div>

        <div className="flex justify-between mt-2">
          <button
            onClick={handleAnterior}
            className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Anterior
          </button>
          <button
            onClick={handleSiguiente}
            className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Siguiente
          </button>
        </div>
      </div>
    </>
  );
};

export default NumeroMesas;
