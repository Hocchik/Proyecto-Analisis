import React from 'react';

const drinksData = [
    {
        id: 1,
        title: "Limonada Frozen 1L",
        price: "S/. 15.00",
        description: "Refrescante limonada para acompañar tus comidas.",
        image: "",
    },
    {
        id: 2,
        title: "Chicha Morada 1L",
        price: "S/. 15.00",
        description: "Tradicional bebida peruana hecha de maíz morado.",
        image: "",
    },
    {
        id: 3,
        title: "Maracuya Frozen 1L",
        price: "S/. 15.00",
        description: "Deliciosa bebida de maracuyá helada.",
        image: "",
    },
    {
        id: 4,
        title: "Clarito Helado",
        price: "S/. 7.00",
        description: "Una opción ligera y refrescante.",
        image: "",
    },
    {
        id: 5,
        title: "Inca Cola 1/2L",
        price: "S/. 4.00",
        description: "",
        image: "",
    },
    {
        id: 6,
        title: "Coca Cola 1/2L",
        price: "S/. 4.00",
        description: "",
        image: "",
    },
    {
        id: 7,
        title: "Inka Cola 1L",
        price: "S/. 8.00",
        description: "",
        image: "",
    },
    {
        id: 8,
        title: "Coca Cola 1L",
        price: "S/. 8.00",
        description: "",
        image: "",
    },
    {
        id: 9,
        title: "Inka Cola 2L",
        price: "S/. 10.00",
        description: "",
        image: "",
    },
    {
        id: 10,
        title: "Coca Cola 2L",
        price: "S/. 10.00",
        description: "",
        image: "",
    },
    {
        id: 11,
        title: "Pilsen",
        price: "S/. 9.00",
        description: "Cerveza clásica para disfrutar con amigos.",
        image: "",
    },
    {
        id: 12,
        title: "Cristal",
        price: "S/. 9.00",
        description: "Cerveza peruana refrescante.",
        image: "",
    },
    {
        id: 13,
        title: "Cusqueña Trigo",
        price: "S/. 10.00",
        description: "Cerveza premium con notas de trigo.",
        image: "",
    },
    {
        id: 14,
        title: "Cusqueña Negra",
        price: "S/. 10.00",
        description: "Cerveza oscura con cuerpo robusto.",
        image: "",
    },
];

const Drinks = () => {
    return (
        <div className="py-10 bg-white mt-10">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text- font-serif mb-8">Nuestras Bebidas</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {drinksData.map((drink) => (
                        <div
                            key={drink.id}
                            style={{ backgroundColor: "#CE8C36" }}
                            className=" shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    src={drink.image}
                                    alt={drink.title}
                                    className="w-full h-64 object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-xl font-bold font-sans text-white mb-2">{drink.title}</h2>
                                <p className="text-sm font-sans text-white mb-4">{drink.description}</p>
                                <p className="mt-2 text-lg font-semibold text-white">{drink.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Drinks;
