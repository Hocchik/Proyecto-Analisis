const Login = () => {
    return (
      <div>
        <h2>Login</h2>
        <form>
          <div>
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div>
            <label>Contraseña:</label>
            <input type="password" required />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    );
  };
  
  export default Login;