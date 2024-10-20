import React, { useState } from 'react';

function Reservation() {
    const [peopleCount, setPeopleCount] = useState(1);
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedTable, setSelectedTable] = useState('');

    const handlePeopleChange = (count) => {
        setPeopleCount(count);
    };

    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };

    const handleTimeChange = (time) => {
        setSelectedTime(time);
    };

    const handleTableChange = (table) => {
        setSelectedTable(table);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ peopleCount, selectedDate, selectedTime, selectedTable });
    };

    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white mt-16"> {/* Añadido margin-top aquí */}
            <form className="bg-gray-800 p-8 rounded-lg shadow-lg w-96" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-4 text-center">Realiza tu reserva</h2>

                <div className="mb-4">
                    <label className="block mb-2">Elige la cantidad de personas:</label>
                    <div className="flex justify-between">
                        {[1, 2, 3, 4, 5, 6].map((count) => (
                            <button
                                key={count}
                                type="button"
                                onClick={() => handlePeopleChange(count)}
                                className={`w-12 h-12 rounded-full ${peopleCount === count ? 'bg-blue-600' : 'bg-gray-700'
                                    } hover:bg-blue-500`}
                            >
                                {count}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Selecciona una fecha:</label>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="w-full bg-gray-700 border border-gray-600 rounded p-2"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Elige una hora:</label>
                    <div className="flex justify-between">
                        {['12:00', '1:00', '1:30', 'Otros'].map((time) => (
                            <button
                                key={time}
                                type="button"
                                onClick={() => handleTimeChange(time)}
                                className={`flex-1 mx-1 text-center py-2 rounded ${selectedTime === time ? 'bg-blue-600' : 'bg-gray-700'
                                    } hover:bg-blue-500`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mb-4">
                    <label className="block mb-2">Elige mesa:</label>
                    <div className="flex justify-between">
                        {['Mesa 1', 'Mesa 2', 'Mesa 3'].map((table) => (
                            <button
                                key={table}
                                type="button"
                                onClick={() => handleTableChange(table)}
                                className={`flex-1 mx-1 text-center py-2 rounded ${selectedTable === table ? 'bg-blue-600' : 'bg-gray-700'
                                    } hover:bg-blue-500`}
                            >
                                {table}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500"
                    >
                        Reservar
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Reservation;