import React from 'react';

const MiReserva = () => {
    const reservas = [
        { id: 1, nombre: 'Juan', apellido: 'Pérez', fecha: '2024-11-30', detalles: 'Mesa para 4 personas' },
        { id: 2, nombre: 'Ana', apellido: 'Gómez', fecha: '2024-12-01', detalles: 'Mesa junto a la ventana' },
        { id: 3, nombre: 'Carlos', apellido: 'Martínez', fecha: '2024-12-02', detalles: 'Mesa en el patio' },
    ];

    const eliminarReserva = (id) => {
        alert(`Reserva con ID: ${id} eliminada`);
    };

    return (
        <div className='bg-yellow-950'>
            <div className="container mx-auto p-6 mt-16">
                <h2 className="text-2xl font-bold mb-4 text-white" >Mis Reservas</h2>

                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-3 px-4 border-b">ID</th>
                            <th className="py-3 px-4 border-b">Nombre y Apellido</th>
                            <th className="py-3 px-4 border-b">Día de la Reserva</th>
                            <th className="py-3 px-4 border-b">Más Detalles</th>
                            <th className="py-3 px-4 border-b">Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservas.map((reserva) => (
                            <tr key={reserva.id} className="border-b">
                                <td className="py-2 px-4">{reserva.id}</td>
                                <td className="py-2 px-4">{`${reserva.nombre} ${reserva.apellido}`}</td>
                                <td className="py-2 px-4">{reserva.fecha}</td>
                                <td className="py-2 px-4">{reserva.detalles}</td>
                                <td className="py-2 px-4 text-center">
                                    <button
                                        onClick={() => eliminarReserva(reserva.id)}
                                        className="bg-red-500 text-white py-1 px-4 rounded hover:bg-red-600"
                                    >
                                        Eliminar Reserva
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MiReserva;
