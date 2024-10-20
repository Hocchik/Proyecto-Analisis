import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-black shadow-md flex items-center justify-between px-8 py-2 z-50"> {/* Cambios aquí */}
      <h1 className="w-3/12">
        <Link to="/" className="h-10 w-auto text-white hover:text-cyan-400 duration-200 text-lg">D'Peñas</Link>
      </h1>

      <nav className="nav font-semibold text-lg text-white">
        <ul className="flex items-center">
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100">
            <Link to="/" className="text-white hover:text-cyan-400 duration-200">Sobre Nosotros</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100">
            <Link to="/platos" className="text-white hover:text-cyan-400 duration-200">Carta</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100">
            <Link to="/reserva-de-mesa" className="text-white hover:text-cyan-400 duration-200">Reserva de Mesa</Link>
          </li>
          <li className="p-4 border-b-2 border-green-500 border-opacity-0 hover:border-opacity-100">
            <Link to="/contactanos" className="text-white hover:text-cyan-400 duration-200">Contáctanos</Link>
          </li>
        </ul>
      </nav>

      <div className="w-3/12 flex justify-end">
        <a href="#" className="text-white hover:bg-cyan-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base px-4 lg:px-5 py-2 lg:py-2.5 mr-2"><Link to="/login">Log in</Link></a>
      </div>
    </header>
  );
};

export default Header;