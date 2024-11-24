import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NumeroPersona = () => {
    const numeros = [1, 2, 3, 4, 5, 6];
    const [seleccionado, setSeleccionado] = useState(null);
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSiguiente = () => {
        if (seleccionado !== null) {
            navigate('/home/reservaMesa/fechaHora', { state: { numeroPersonas: seleccionado } });
        } else {
            setError(true);
        }
    };

    return (
        <div className="flex flex-col items-center gap-6  p-6 bg-orange-800 ">
            <h2 className="text-xl font-bold text-white mb-4">Selecciona el número de personas</h2>

            <div className="flex justify-center items-center gap-4">
                {numeros.map((numero) => (
                    <div
                        key={numero}
                        onClick={() => {
                            setSeleccionado(numero);
                            setError(false);
                        }}
                        className={`w-12 h-12 flex justify-center items-center border-2 rounded-full text-lg font-bold cursor-pointer transition-all 
                        ${seleccionado === numero
                                ? 'bg-white text-black border-white'
                                : 'bg-black text-white hover:bg-white hover:text-black'
                            }`}
                    >
                        {numero}
                    </div>
                ))}
            </div>

            {error && (
                <p className="text-black font-semibold text-sm mt-2">
                    Por favor, selecciona el número de personas antes de continuar.
                </p>
            )}

            <div className="flex gap-4 mt-6">
                <button
                    onClick={handleSiguiente}
                    className="select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    type="button"
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default NumeroPersona;
