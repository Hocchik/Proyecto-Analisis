import React from 'react';

const carteData = [
    {
        id: 1,
        title: "Ceviche Clásico",
        price: "$15.00",
        description: "Ceviche de pescado fresco marinado en jugo de limón y ají limo.",
        image: "https://images.unsplash.com/photo-1591337678535-29d9cf1f3474?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: 2,
        title: "Arroz con Mariscos",
        price: "$18.00",
        description: "Plato tradicional de arroz sazonado con mariscos frescos y especias.",
        image: ""
    },
    {
        id: 3,
        title: "Jalea Mixta",
        price: "$20.00",
        description: "Fritura de pescado y mariscos acompañada de salsa criolla y yuca.",
        image: ""
    },
];

const Carte = () => {
    return (
        <div className="flex justify-center items-center min-h-screen mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {carteData.map((dish) => (
                    <div key={dish.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={dish.image}
                                alt={dish.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {dish.title}
                                </p>
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {dish.price}
                                </p>
                            </div>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                {dish.description}
                            </p>
                        </div>
                        <div className="p-6 pt-0">
                            <button
                                className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                                type="button">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carte;
