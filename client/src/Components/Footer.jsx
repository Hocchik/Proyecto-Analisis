import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Pizzería Michelina. Todos los derechos reservados.</p>
      <div className="social-links">
        {
          //Poner Iconos
        }
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
      </div>
    </footer>
  );
};

export default Footer;