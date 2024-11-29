import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Header2 from './pages/Header2';
import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';
import Carta from './Carta';
import AboutUs from './pages/AboutUs';
import ReservaMesa from './ReservaMesa';
import MiReserva from './pages/ReservacionPag/MiReserva';

const Home = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        const userLoggedIn = localStorage.getItem('userLoggedIn') === 'true';
        setIsLoggedIn(userLoggedIn);
    }, []);

    return (
        <>
            {isLoggedIn ? <Header /> : <Header />}

            <Routes>
                <Route path="/reservaMesa/*" element={<ReservaMesa />} />
                <Route path="/contactanos" element={<ContactUs />} />
                <Route path="/carta/*" element={<Carta />} />
                <Route path="/miReserva" element={<MiReserva />} />
                <Route path="*" element={<AboutUs />} />
            </Routes>

            <Footer />
        </>
    );
};

export default Home;
