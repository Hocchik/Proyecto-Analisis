import React, { useState } from "react";

const NumeroMesas = () => {
  const [selectedMesa, setSelectedMesa] = useState(null);

  const handleMesaClick = (mesa) => {
    setSelectedMesa(mesa);
  };

  return (
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
  );
};

export default NumeroMesas;