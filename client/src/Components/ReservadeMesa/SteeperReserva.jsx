import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const SteeperReserva = ({paso}) => {
  const [pasoActual, setPasoActual] = useState(1);

  
  // Nombres y descripciones de los pasos
  const pasos = [
    { nombre: "Cantidad de Personas", descripcion: "Completa tus datos personales." },
    { nombre: "Fecha y Hora", descripcion: "Selecciona la fecha y hora." },
    { nombre: "Numero de Mesa", descripcion: "Elige servicios adicionales." },
    { nombre: "Detalles", descripcion: "Revisa y confirma los detalles." },
    { nombre: "Finalizado", descripcion: "¡Reserva completada con éxito!" },
  ];

  const handleSiguiente = () => {
    if (pasoActual < pasos.length) {
      setPasoActual(pasoActual + 1);
    }
  };

  const handleAnterior = () => {
    if (pasoActual > 1) {
      setPasoActual(pasoActual - 1);
    }
  };

  return (
    <div className="w-full px-24 py-4 mt-20">
      <div className="relative flex items-center justify-between w-full">
        <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-gray-300"></div>
        <div
          className={`absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 ${pasoActual === pasos.length ? "bg-blue-900" : "bg-gray-900"
            } transition-all duration-500`}
        ></div>

        {pasos.map((paso, index) => {
          const pasoNumero = index + 1;
          return (
            <div
              key={pasoNumero}
              className={`relative z-10 grid w-10 h-10 font-bold text-white transition-all duration-300 ${pasoNumero <= pasoActual ? "bg-blue-900" : "bg-gray-300"
                } rounded-full place-items-center`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                ></path>
              </svg>

              <div className="absolute -bottom-[4.5rem] w-max text-center">
                <h6 className="block font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700">
                  {paso.nombre}
                </h6>
                <p className="block font-sans text-sm antialiased font-normal leading-relaxed text-gray-700">
                  {paso.descripcion}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <Outlet/>

      <div className="flex justify-between mt-32">
        <button
          onClick={handleAnterior}
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          disabled={pasoActual === 1}
        >
          Anterior
        </button>
        <button
          onClick={handleSiguiente}
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          disabled={pasoActual === pasos.length}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default SteeperReserva;