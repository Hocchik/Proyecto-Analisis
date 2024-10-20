import React from 'react';

const dishesData = [
    {
        id: 1,
        title: "Apple AirPods",
        price: "$95.00",
        description: "With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.",
        image: "https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
    },
    {
        id: 2,
        title: "Samsung Galaxy Buds",
        price: "$85.00",
        description: "Enjoy high-quality audio with long-lasting battery life and a sleek design.",
        image: ""
    },
    {
        id: 3,
        title: "Sony Headphones",
        price: "$120.00",
        description: "Noise-cancelling over-ear headphones with superior sound quality.",
        image: ""
    },
    {
        id: 4,
        title: "Beats Headphones",
        price: "$150.00",
        description: "Experience powerful sound and noise cancellation with Beats headphones.",
        image: ""
    },
    {
        id: 5,
        title: "Bose SoundSport",
        price: "$110.00",
        description: "Stay active with these comfortable and water-resistant sport earphones.",
        image: ""
    },
    {
        id: 6,
        title: "JBL Bluetooth Speaker",
        price: "$75.00",
        description: "Portable Bluetooth speaker with powerful sound and long battery life.",
        image: ""
    }
];

const Dishes = () => {
    return (
        <div className="flex justify-center items-center min-h-screen mt-16"> {/* Añadido margin-top aquí */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
                {dishesData.map((dish) => (
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

export default Dishes;