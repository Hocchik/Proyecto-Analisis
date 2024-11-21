import React from 'react';

const piqueosData = [
    {
        id: 1,
        title: "Piqueo Marino",
        price: "$20.00",
        description: "Una deliciosa selección de mariscos frescos acompañados de yuca frita y salsa criolla.",
        image: "https://images.unsplash.com/photo-1565299543925-14a0b7ab6e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI5fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 2,
        title: "Piqueo Andino",
        price: "$18.00",
        description: "Un plato tradicional con ingredientes andinos como papa, choclo y queso fresco.",
        image: ""
    },
    {
        id: 3,
        title: "Piqueo Criollo",
        price: "$22.00",
        description: "Combinación de carnes asadas, tamal y chorizo, acompañado con salsas criollas.",
        image: ""
    },
];

const Piqueos = () => {
    return (
        <div className="flex justify-center items-center min-h-screen mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {piqueosData.map((piqueo) => (
                    <div key={piqueo.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={piqueo.image}
                                alt={piqueo.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {piqueo.title}
                                </p>
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {piqueo.price}
                                </p>
                            </div>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                {piqueo.description}
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

export default Piqueos;
