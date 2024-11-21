import React from "react";

const SectionTwo = () => {
    return (
        <div className="py-10 bg-orange-900">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="mt-8 md:mt-0 md:mr-6 text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">¡Explora los sabores del mar!</h1>
                    <p className="text-lg md:text-xl mb-4">
                        Ven y disfruta de nuestros exquisitos platillos elaborados con ingredientes frescos.
                    </p>
                    <button className="hover:opacity-90 bg-white text-black font-bold py-2 px-4 rounded-md">
                        Reserva tu mesa
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <img
                        src="https://cdn0.recetasgratis.net/es/posts/8/7/2/ceviche_mixto_peruano_77278_orig.jpg"
                        alt="Ceviche peruano"
                        className="w-72 h-64 md:w-96 md:h-80 rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default SectionTwo;
