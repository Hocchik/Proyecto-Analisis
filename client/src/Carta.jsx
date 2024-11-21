import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Dishes from './Components/Carta/Dishes';
import Piqueos from './Components/Carta/Piqueos';
import Drinks from './Components/Carta/Drinks';
import CartaPage from './Components/Carta/CartaPage';


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