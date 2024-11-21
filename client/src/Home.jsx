import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Reservation from './pages/Reservation';
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