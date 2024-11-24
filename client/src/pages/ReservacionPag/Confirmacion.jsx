import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormularioUsuario = () => {
  const [formulario, setFormulario] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    telefono: "",
  });
  const [errores, setErrores] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleAnterior = () => {
    navigate('/home/reservaMesa/detalles');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevosErrores = {};

    if (!formulario.nombre.trim()) {
      nuevosErrores.nombre = "El nombre es obligatorio.";
    }

    if (!formulario.apellido.trim()) {
      nuevosErrores.apellido = "El apellido es obligatorio.";
    }

    if (!formulario.correo.trim()) {
      nuevosErrores.correo = "El correo es obligatorio.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formulario.correo)) {
      nuevosErrores.correo = "El correo no es válido.";
    }

    if (!formulario.telefono.trim()) {
      nuevosErrores.telefono = "El teléfono es obligatorio.";
    } else if (!/^\d{9}$/.test(formulario.telefono)) {
      nuevosErrores.telefono = "El teléfono debe tener 9 números.";
    }

    if (Object.keys(nuevosErrores).length > 0) {
      setErrores(nuevosErrores);
      return;
    }

    setErrores({});
    setModalVisible(true);

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "telefono") {
      // Solo permite números en el campo de teléfono
      if (/^\d*$/.test(value)) {
        setFormulario({ ...formulario, [name]: value });
      }
    } else {
      setFormulario({ ...formulario, [name]: value });
    }
  };

  return (
    <div className="p-8 bg-orange-800 text-center">
      <h2 className="text-2xl font-bold text-white text-center mb-6">Formulario de Usuario</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="nombre" className="block text-lg font-medium mb-1">
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formulario.nombre}
              onChange={handleChange}
              className={`w-[500px] p-3 border ${errores.nombre ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errores.nombre ? "focus:ring-red-500" : "focus:ring-orange-500"}`}
            />
            {errores.nombre && <p className="text-black font-bold text-sm mt-1">{errores.nombre}</p>}
          </div>

          <div className="w-1/2">
            <label htmlFor="apellido" className="block text-lg font-medium mb-1">
              Apellido:
            </label>
            <input
              type="text"
              id="apellido"
              name="apellido"
              value={formulario.apellido}
              onChange={handleChange}
              className={`w-[500px] p-3 border ${errores.apellido ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errores.apellido ? "focus:ring-red-500" : "focus:ring-orange-500"}`}
            />
            {errores.apellido && <p className="text-black font-bold text-sm mt-1">{errores.apellido}</p>}
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-1/2">
            <label htmlFor="correo" className="block text-lg font-medium mb-1">
              Correo:
            </label>
            <input
              type="email"
              id="correo"
              name="correo"
              value={formulario.correo}
              onChange={handleChange}
              className={`w-[500px] p-3 border ${errores.correo ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errores.correo ? "focus:ring-red-500" : "focus:ring-orange-500"}`}
            />
            {errores.correo && <p className="text-black font-bold text-sm mt-1">{errores.correo}</p>}
          </div>

          <div className="w-1/2">
            <label htmlFor="telefono" className="block text-lg font-medium mb-1">
              Teléfono
            </label>
            <input
              type="text"
              id="telefono"
              name="telefono"
              value={formulario.telefono}
              onChange={handleChange}
              maxLength="9"
              className={`w-[500px] p-3 border ${errores.telefono ? "border-red-500" : "border-gray-300"} rounded-lg shadow-sm focus:outline-none focus:ring-2 ${errores.telefono ? "focus:ring-red-500" : "focus:ring-orange-500"}`}
            />
            {errores.telefono && <p className="text-black font-bold text-sm mt-1">{errores.telefono}</p>}
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={handleAnterior}
            className="m-3 select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            Anterior
          </button>
          <button
            type="submit"
            className="m-3 select-none rounded-lg bg-black py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            Enviar
          </button>
        </div>
      </form>

      {modalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-green-500 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-lg font-semibold text-green-600">¡Reserva enviada exitosamente!</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormularioUsuario;
