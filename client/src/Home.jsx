import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Reservation from './Components/ReservadeMesa/Reservation';
import ContactUs from './pages/ContactUs';
import Carta from './Carta';
import AboutUs from './pages/AboutUs';





const Home = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/reserva-de-mesa" element={<Reservation />} />
                <Route path="/contactanos" element={<ContactUs />} />
                <Route path="/carta/*" element={<Carta />} />
                <Route path="*" element={<AboutUs />} />

            </Routes>
            <Footer />
        </>
    )
}

export default Home;