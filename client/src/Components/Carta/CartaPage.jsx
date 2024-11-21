import React from "react";

const carteData = [
    {
        id: 1,
        title: "Lomo Saltado",
        price: "S/. 28.00",
        description: "Delicioso lomo saltado con ingredientes frescos.",
        image: "https://example.com/lomo-saltado.jpg",
    },
    {
        id: 2,
        title: "Bistec Apanado",
        price: "S/. 20.00",
        description: "Bistec apanado acompañado de ensalada y papas.",
        image: "https://example.com/bistec-apanado.jpg",
    },
    {
        id: 3,
        title: "Pollo a la Plancha",
        price: "S/. 20.00",
        description: "Pollo a la plancha con guarniciones saludables.",
        image: "https://example.com/pollo-plancha.jpg",
    },
    {
        id: 4,
        title: "Tallarines en Salsa de Langostino",
        price: "S/. 25.00",
        description: "Tallarines frescos en una exquisita salsa de langostinos.",
        image: "https://example.com/tallarines-langostino.jpg",
    },
    {
        id: 5,
        title: "Tacu Tacu en Sala de Marisco",
        price: "S/. 25.00",
        description: "Tradicional tacu tacu bañado en salsa de mariscos.",
        image: "https://example.com/tacu-tacu-mariscos.jpg",
    },
    {
        id: 6,
        title: "Tacu Tacu con Lomo Saltado",
        price: "S/. 25.00",
        description: "Tacu tacu combinado con lomo saltado al estilo peruano.",
        image: "https://example.com/tacu-tacu-lomo.jpg",
    },
    {
        id: 7,
        title: "Tallarines verdes con Lomo Fino",
        price: "S/. 25.00",
        description: "Tallarines verdes acompañados de un jugoso lomo fino.",
        image: "https://example.com/tallarines-verdes.jpg",
    },
    {
        id: 8,
        title: "Tallarines verdes con Chuleta + Ensalada Rusa",
        price: "S/. 25.00",
        description: "Un plato completo con tallarines, chuleta y ensalada rusa.",
        image: "https://example.com/tallarines-chuleta.jpg",
    },
];

const CartaPage = () => {
    return (
        <div className="py-10 bg-white mt-10">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold text-black font-serif mb-8">Nuestra Carta</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {carteData.map((dish) => (
                        <div
                            key={dish.id}
                            style={{ backgroundColor: "#CE8C36" }}
                            className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                        >
                            <div className="relative">
                                <img
                                    src={dish.image}
                                    alt={dish.title}
                                    className="w-full h-48 object-cover"
                                />
                            </div>
                            <div className="p-4 text-center">
                                <h2 className="text-lg font-bold font-sans text-white mb-2">{dish.title}</h2>
                                <p className="text-sm font-sans text-white">{dish.description}</p>
                                <p className="mt-2 text-lg font-semibold text-white">{dish.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CartaPage;
