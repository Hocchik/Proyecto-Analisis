import React from 'react';

const NumeroPersona = () => {
    const numeros = [1, 2, 3, 4, 5, 6];

    return (
        <div className="flex justify-center items-center gap-4 mt-20 bg-black">
            {numeros.map((numero) => (
                <div
                    key={numero}
                    className="w-10 h-10 flex justify-center items-center border-2 border-white text-white rounded-full text-lg font-bold"
                >
                    {numero}
                </div>
            ))}
        </div>
    );
};

export default NumeroPersona;
