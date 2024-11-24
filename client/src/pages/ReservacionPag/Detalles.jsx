import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioReservacion = () => {
  const [requerimiento, setRequerimiento] = useState("");
  const [restriccion, setRestriccion] = useState("");
  const [errores, setErrores] = useState({});
  const navigate = useNavigate();

    const handleSiguiente = () => {
        navigate('/home/reservaMesa/confirmacion');     
    };

    const handleAnterior = () => {
        navigate('/home/reservaMesa/numeroMesas');
    };

  const handleSubmit = (e) => {
    e.preventDefault();
    let camposConErrores = {};

    if (!requerimiento || requerimiento === "invalido") {
      camposConErrores.requerimiento = "Por favor selecciona un requerimiento válido.";
    }

    if (!restriccion.trim()) {
      camposConErrores.restriccion =
        "Por favor escribe si hay alguna alergia, intolerancia o restricción.";
    }

    if (Object.keys(camposConErrores).length > 0) {
      setErrores(camposConErrores);
    } else {
      setErrores({});
      console.log("Formulario enviado:", { requerimiento, restriccion });
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">Formulario de Reservación</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="requerimiento" className="block text-lg font-medium mb-2">
            ¿Tienes algún requerimiento en especial?
          </label>
          <select
            id="requerimiento"
            value={requerimiento}
            onChange={(e) => setRequerimiento(e.target.value)}
            className={`w-full p-3 border ${errores.requerimiento ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errores.requerimiento ? "focus:ring-red-500" : "focus:ring-orange-500"
              }`}
          >
            <option value="invalido">-- Selecciona una opción --</option>
            <option value="diaFestivo">Día festivo</option>
            <option value="aniversario">Aniversario</option>
            <option value="cumpleaños">Cumpleaños</option>
            <option value="otros">Otros</option>
          </select>
          {errores.requerimiento && (
            <p className="text-red-500 text-sm mt-1">{errores.requerimiento}</p>
          )}
        </div>

        <div>
          <label htmlFor="restriccion" className="block text-lg font-medium mb-2">
            ¿Hay alguna alergia, intolerancia o restricción que debamos considerar?
          </label>
          <textarea
            id="restriccion"
            value={restriccion}
            onChange={(e) => setRestriccion(e.target.value)}
            placeholder="Escribe aquí si hay alguna restricción..."
            className={`w-full p-3 border ${errores.restriccion ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errores.restriccion ? "focus:ring-red-500" : "focus:ring-orange-500"
              }`}
            rows="4"
          ></textarea>
          {errores.restriccion && (
            <p className="text-red-500 text-sm mt-1">{errores.restriccion}</p>
          )}
        </div>

        <div className="text-center">
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
      </form>
    </div>
  );
};

export default FormularioReservacion;