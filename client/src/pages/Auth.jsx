import { Routes, Route, Link } from 'react-router-dom';
import Login from './Auth/Login';
import Register from './Auth/Register';

const Auth = () => {
    return (
        <div>
            <h1>Autenticación</h1>
            <nav>
                <Link to="login">Login</Link> | <Link to="register">Regístrate</Link>
            </nav>
            <Routes>
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
            </Routes>
        </div>
    );
};

export default Auth;