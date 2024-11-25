import React from "react";
import EmployeeManagement from "./EmployeeManagement";
import Permissions from "./Permissions";
import Statistics from "./Statistics";
import AccessHistory from "./AccessHistory";

const DashboardAdmin = ({ user, onLogout }) => {
  return (
    <div>
      <h1>Bienvenido Administrador</h1>
      <button onClick={onLogout}>Cerrar Sesión</button>
      <EmployeeManagement />
      <Permissions />
      <Statistics />
      <AccessHistory />
    </div>
  );
};

export default DashboardAdmin;
