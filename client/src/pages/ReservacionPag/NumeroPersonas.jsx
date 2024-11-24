import React from 'react';
import { useNavigate } from 'react-router-dom';

const NumeroPersona = () => {
    const numeros = [1, 2, 3, 4, 5, 6];

    
    const navigate = useNavigate();
    
    const handleSiguiente = () => {
        navigate('/home/reservaMesa/fechaHora');     
    };

    const handleAnterior = () => {
        navigate('/home/reservaMesa/numeroMesas');     
    };


    return (
        <>
            <div className="flex justify-center items-center gap-4 mt-20 bg-black">
                {numeros.map((numero) => (
                    <div
                        key={numero}
                        className="w-10 h-10 flex justify-center items-center border-2 border-white text-white rounded-full text-lg font-bold"
                    >
                        {numero}
                    </div>
                ))}
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

export default NumeroPersona;
