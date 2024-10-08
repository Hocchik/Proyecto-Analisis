const Register = () => {
    return (
      <div>
        <h2>Regístrate</h2>
        <form>
          <div>
            <label>Nombre:</label>
            <input type="text" required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" required />
          </div>
          <button type="submit">Crear Cuenta</button>
        </form>
      </div>
    );
  };
  
  export default Register;