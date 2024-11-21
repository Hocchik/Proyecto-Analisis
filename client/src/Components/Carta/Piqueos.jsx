import React from 'react';

const piqueosData = [
    {
        id: 1,
        title: "Seco de chavelo con costillas de chancho",
        price: "S/. 45.00",
        description: "Un delicioso plato de costillas de chancho con una rica salsa de seco.",
        image: "https://images.unsplash.com/photo-1565299543925-14a0b7ab6e4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI5fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 2,
        title: "Carne seca",
        price: "S/. 42.00",
        description: "Carne seca perfectamente sazonada para disfrutar en cualquier ocasión.",
        image: "https://images.unsplash.com/photo-1559338817-7097f60d72be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI5fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 3,
        title: "Mojado de yuca con costillas de chancho",
        price: "S/. 42.00",
        description: "Yuca bañada en salsa y acompañada de tiernas costillas de chancho.",
        image: "https://images.unsplash.com/photo-1600602685433-75b25515e5ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI5fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 4,
        title: "Cachema encebollado",
        price: "S/. 42.00",
        description: "Cachema fresca con una deliciosa mezcla de cebollas y especias.",
        image: "https://images.unsplash.com/photo-1587607553486-e423f87b0985?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI5fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
    },
    {
        id: 5,
        title: "Majado de yuca + seco de chavelo + costillas de chancho",
        price: "S/. 65.00",
        description: "Una combinación de majado de yuca con seco de chavelo y costillas de chancho.",
        image: "https://images.unsplash.com/photo-1580983525291-d1a2d060beef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTI5fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400"
    }
];

const Piqueos = () => {
    return (
        <div className="py-10 bg-white mt-10">
            <div className="container mx-auto text-center">
                <h1 className="text-4xl font-bold font-serif text-black mb-8">Nuestros Piqueos</h1>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    <div className="col-span-1 lg:col-span-2 bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105" style={{ backgroundColor: "#CE8C36" }}>
                        <div className="relative">
                            <img
                                src={piqueosData[0].image}
                                alt={piqueosData[0].title}
                                className="w-full h-80 object-cover"
                            />
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-bold font-sans text-white mb-2">{piqueosData[0].title}</h2>
                            <p className="text-sm font-sans text-white mb-4">{piqueosData[0].description}</p>
                            <p className="mt-2 text-lg font-semibold text-white">{piqueosData[0].price}</p>
                        </div>
                    </div>

                    <div className="col-span-1 lg:col-span-3 grid grid-cols-2 gap-8">
                        {piqueosData.slice(1).map((piqueo) => (
                            <div
                                key={piqueo.id}
                                style={{ backgroundColor: "#CE8C36" }}
                                className=" shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105"
                            >
                                <div className="relative">
                                    <img
                                        src={piqueo.image}
                                        alt={piqueo.title}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-4 text-center">
                                    <h2 className="text-lg font-bold font-sans text-white mb-2">{piqueo.title}</h2>
                                    <p className="text-sm font-sans text-white mb-4">{piqueo.description}</p>
                                    <p className="mt-2 text-lg font-semibold text-white">{piqueo.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Piqueos;
