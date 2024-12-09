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

  const mesas = Array.from({ length: 12 }, (_, i) => i + 1);

  const mesasArriba = mesas.slice(0, 6);
  const mesasAbajo = mesas.slice(6, 12);

  return (
    <>
      <div className="bg-orange-800">
        <h2 className="text-white text-2xl font-bold mb-4 text-center">Selecciona una Mesa</h2>

        <div className="grid grid-cols-6 gap-4 justify-center mb-4">
          {mesasArriba.map((mesa) => (
            <button
              key={mesa}
              onClick={() => handleMesaClick(mesa)}
              className={`px-6 py-3 rounded-full border-2 text-lg font-bold transition-all 
                ${selectedMesa === mesa
                  ? "bg-black text-white border-white"
                  : "bg-white text-black border-black hover:bg-black hover:text-white"
                }`}
            >
              Mesa {mesa}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-6 gap-4 justify-center">
          {mesasAbajo.map((mesa) => (
            <button
              key={mesa}
              onClick={() => handleMesaClick(mesa)}
              className={`px-6 py-3 rounded-full border-2 text-lg font-bold transition-all 
                ${selectedMesa === mesa
                  ? "bg-black text-white border-white"
                  : "bg-white text-black border-black hover:bg-black hover:text-white"
                }`}
            >
              Mesa {mesa}
            </button>
          ))}
        </div>

        {selectedMesa && (
          <h3 className="text-white mt-4 text-center font-bold">
            Has seleccionado la Mesa {selectedMesa}
          </h3>
        )}

        {error && <h2 className="text-black mt-4 font-bold text-center">Por favor, selecciona una mesa antes de continuar.</h2>}

        <div className="mt-8 flex gap-4 justify-center">
          <button
            onClick={handleAnterior}
            className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Anterior
          </button>
          <button
            onClick={handleSiguiente}
            className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Siguiente
          </button>
        </div>
        <br />
      </div>
    </>
  );
};

export default NumeroMesas;
