import React, { useState, useEffect } from "react";

const Permissions = () => {
  const [permissions, setPermissions] = useState([]);

  useEffect(() => {
    const storedPermissions = JSON.parse(localStorage.getItem("permissions")) || [];
    setPermissions(storedPermissions);
  }, []);

  const addPermission = () => {
    const name = prompt("Nombre del empleado:");
    const type = prompt("Tipo de permiso (Incapacidad o Permiso):");
    const justification = prompt("Justificación:");
    const permission = { id: Date.now(), name, type, justification };
    const updatedPermissions = [...permissions, permission];
    setPermissions(updatedPermissions);
    localStorage.setItem("permissions", JSON.stringify(updatedPermissions));
  };

  return (
    <div>
      <h2>Gestión de Permisos e Incapacidades</h2>
      <button onClick={addPermission}>Agregar Permiso/Incapacidad</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Justificación</th>
          </tr>
        </thead>
        <tbody>
          {permissions.map((permission) => (
            <tr key={permission.id}>
              <td>{permission.name}</td>
              <td>{permission.type}</td>
              <td>{permission.justification}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Permissions;
