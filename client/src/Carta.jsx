import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dishes from './pages/Dishes';
import Piqueos from './pages/Piqueos';
import Drinks from './pages/Drinks';
import CartaPage from './pages/CartaPage';


const Carta = () => {
    return (
    <>
        <Routes>
            <Route path="/ceviches" element={<Dishes />} />
            <Route path="/piqueos" element={<Piqueos />} />
            <Route path="/bebidas" element={<Drinks />} />
            <Route path="/platosCarta" element={<CartaPage />} />
        </Routes>
    </>
    )
}

export default Carta