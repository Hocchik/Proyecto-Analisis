import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Dishes from './pages/Dishes';
import Reservation from './pages/Reservation';
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <Header />

      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="/platos" element={<Dishes />} />
          <Route path="/reserva-de-mesa" element={<Reservation />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
};

// Componente para manejar rutas no encontradas
const NotFound = () => {
  return (
    <div>
      <h2>404 - Página No Encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
};

export default App;