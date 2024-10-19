import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="bg-indigo-500 text-white text-center py-4">
        <h1 className="text-3xl font-bold">D'Peñas Cevichería</h1>
      </div>
      <main className="flex-grow p-4">
        <section className="bg-indigo-500 p-6 rounded-lg text-center text-white">
          <h2 className="text-2xl font-semibold">¡Bienvenido a D'Peñas!</h2>
          <p className="mt-2">Descubre nuestros deliciosos ceviches y mariscos frescos.</p>
          <Link to="/platos">
            <button className="mt-4 bg-cyan-300 text-black py-2 px-4">
              Ver Menú
            </button>
          </Link>
        </section>
        <section className="mt-6 ">
          <h2 className="text-2xl font-semibold text-center">¿Por qué elegir D'Peñas?</h2>
          <div className="flex justify-around mt-4">
            <div className="bg-violet-400 p-4 rounded-lg text-center w-1/3">
              <h3 className="font-bold">Ingredientes Frescos</h3>
              <p>Solo usamos los mejores ingredientes para nuestros platos.</p>
            </div>
            <div className="bg-violet-400 p-4 rounded-lg text-center w-1/3">
              <h3 className="font-bold">Variedad de Platos</h3>
              <p>Disfruta de una amplia selección de ceviches y mariscos.</p>
            </div>
            <div className="bg-violet-400 p-4 rounded-lg text-center w-1/3">
              <h3 className="font-bold">Servicio al Cliente</h3>
              <p>Nuestro equipo está listo para atenderte con una sonrisa.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
