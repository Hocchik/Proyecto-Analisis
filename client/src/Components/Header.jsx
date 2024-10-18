import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">
          <Link to="/">Pizzería Michelina</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/sobre-nosotros">Sobre Nosotros</Link>
          </li>
          <li>
            <Link to="/platos">Platos</Link>
          </li>
          <li>
            <Link to="/reserva-de-mesa">Reserva de Mesa</Link>
          </li>
          <li>
            <Link to="/contactanos">Contáctanos</Link>
          </li>
          asasasa
        </ul>
      </nav>
    </header>
  );
};

export default Header;