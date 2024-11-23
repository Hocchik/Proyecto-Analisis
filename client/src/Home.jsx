import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import ContactUs from './pages/ContactUs';
import Carta from './Carta';
import AboutUs from './pages/AboutUs';
import ReservaMesa from './ReservaMesa';





const Home = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/reservaMesa/*" element={<ReservaMesa/>} />
                <Route path="/contactanos" element={<ContactUs />} />
                <Route path="/carta/*" element={<Carta />} />
                <Route path="*" element={<AboutUs />} />
            </Routes>
            <Footer />
        </>
    )
}

export default Home;