import React from "react";

const SectionOne = () => {
    return (
        <div className="py-10 bg-amber-700 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn0.recetasgratis.net/es/posts/7/4/1/ceviche_peruano_18147_orig.jpg"
                        alt="Frapuccino"
                        className="w-72 h-64 md:w-96 md:h-80 rounded-lg shadow-lg"
                    />
                </div>

                <div className="mt-8 md:mt-0 md:ml-6 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Deliciosa comida reconfortante!</h1>
                    <p className="text-lg md:text-xl mb-4">
                        Un lugar para conectar, compartir y disfrutar en familia.
                    </p>
                    <button className="hover:opacity-90 bg-white text-black font-bold py-2 px-4 rounded-md">
                        Mira nuestro menú
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SectionOne;
