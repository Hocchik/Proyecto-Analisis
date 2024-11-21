import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import AboutUs from './pages/AboutUs';
import Dishes from './pages/Dishes';
import Reservation from './pages/Reservation';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Register from './pages/Register';
import Piqueos from './pages/Piqueos';
import Drinks from './pages/Drinks';
import Carte from './pages/Carte';

import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas que NO usan Header y Footer */}
        <Route path="/login" element={<Login />} /> {/* Ruta de Login */}
        <Route path="/register" element={<Register />} /> {/* Ruta de Register */}

        {/* Rutas que SÍ usan Header y Footer */}
        <Route element={<Layout />}>
          <Route path="/" element={<AboutUs />} />
          <Route path="/ceviches" element={<Dishes />} />
          <Route path="/reserva-de-mesa" element={<Reservation />} />
          <Route path="/contactanos" element={<ContactUs />} />
          <Route path="/piqueos" element={<Piqueos />} />
          <Route path="/bebidas" element={<Drinks />} />
          <Route path="/carta" element={<Carte />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

// Layout con Header y Footer
const Layout = () => {
  return (
    <>
      <Header />
      <main style={{ minHeight: '80vh', padding: '20px' }}>
        <Outlet /> {/* Aquí se renderizan las rutas hijas */}
      </main>
      <Footer />
    </>
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