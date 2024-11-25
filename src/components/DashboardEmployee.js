import React from "react";
import Permissions from "./Permissions";
import Statistics from "./Statistics";
import AccessHistory from "./AccessHistory";

const DashboardEmployee = ({ user, onLogout }) => {
  return (
    <div>
      <h1>Bienvenido Empleado</h1>
      <button onClick={onLogout}>Cerrar Sesión</button>
      <Permissions />
      <Statistics />
      <AccessHistory />
    </div>
  );
};

export default DashboardEmployee;
