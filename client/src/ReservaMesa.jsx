import { Routes, Route } from 'react-router-dom';
import React from 'react';
import SteeperReserva from './Components/ReservadeMesa/SteeperReserva';
import FechaHora from './pages/ReservacionPag/FechaHora';
import NumeroMesas from './pages/ReservacionPag/NumeroMesas';
import Detalles from './pages/ReservacionPag/Detalles';
import Confirmacion from './pages/ReservacionPag/Confirmacion';
import NumeroPersonas from './pages/ReservacionPag/NumeroPersonas';
import { useState } from 'react';

const ReservaMesa = () => {

    return (
        
        <>
            <SteeperReserva />
            <Routes>
                <Route path="*" element={<NumeroPersonas />} />
                <Route path="/numeroPersonas" element={<NumeroPersonas />}/>
                <Route path="/fechaHora" element={<FechaHora />} />
                <Route path="/numeroMesas" element={<NumeroMesas />} />
                <Route path="/detalles" element={<Detalles />} />
                <Route path="/confirmacion" element={<Confirmacion />} />
            </Routes>
        </>
    );
};

export default ReservaMesa;
