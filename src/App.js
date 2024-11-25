import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleShowLogin = () => {
    setShowLogin(true);
    setShowRegister(false);
  };

  const handleShowRegister = () => {
    setShowRegister(true);
    setShowLogin(false);
  };

  return (
    <div>
      <header className="header">
        <h1>Sistema de Información Empresarial</h1>
        <p>
          Bienvenido al sistema de información que permite gestionar el control
          de acceso, el historial laboral, permisos e incapacidades de
          empleados, y generar reportes en Excel con estadísticas relevantes.
        </p>
        <p>
          Este sistema está diseñado para mejorar la gestión de los empleados y
          optimizar los procesos administrativos.
        </p>
        <div className="button-group">
          <button onClick={handleShowLogin}>Iniciar Sesión</button>
          <button onClick={handleShowRegister}>Registrarse</button>
        </div>
      </header>

      <main>
        {showLogin && <Login />}
        {showRegister && <Register />}
      </main>
    </div>
  );
};

export default App;
