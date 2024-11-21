import React from 'react';

const drinksData = [
    {
        id: 1,
        title: "Pisco Sour",
        price: "$12.00",
        description: "Cóctel tradicional peruano a base de pisco, limón y clara de huevo.",
        image: "https://images.unsplash.com/photo-1587351028089-4b84943970b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60"
    },
    {
        id: 2,
        title: "Chicha Morada",
        price: "$5.00",
        description: "Refresco andino elaborado a base de maíz morado y frutas.",
        image: ""
    },
    {
        id: 3,
        title: "Limonada Frozen",
        price: "$6.00",
        description: "Bebida refrescante de limón servida en estilo frozen.",
        image: ""
    },
];

const Drinks = () => {
    return (
        <div className="flex justify-center items-center min-h-screen mt-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {drinksData.map((drink) => (
                    <div key={drink.id} className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full transform transition-transform duration-300 hover:scale-105">
                        <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96">
                            <img
                                src={drink.image}
                                alt={drink.title}
                                className="object-cover w-full h-full"
                            />
                        </div>
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-2">
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {drink.title}
                                </p>
                                <p className="block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900">
                                    {drink.price}
                                </p>
                            </div>
                            <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                                {drink.description}
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

export default Drinks;
