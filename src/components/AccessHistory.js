import React, { useState, useEffect } from "react";

const AccessHistory = () => {
  const [accessRecords, setAccessRecords] = useState([]);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("accessRecords")) || [];
    setAccessRecords(storedRecords);
  }, []);

  const addAccessRecord = () => {
    const name = prompt("Nombre del empleado:");
    const time = prompt("Hora de acceso (HH:mm):");
    const record = { id: Date.now(), name, time };
    const updatedRecords = [...accessRecords, record];
    setAccessRecords(updatedRecords);
    localStorage.setItem("accessRecords", JSON.stringify(updatedRecords));
  };

  return (
    <div>
      <h2>Historial de Accesos</h2>
      <button onClick={addAccessRecord}>Registrar Acceso</button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Hora de Acceso</th>
          </tr>
        </thead>
        <tbody>
          {accessRecords.map((record) => (
            <tr key={record.id}>
              <td>{record.name}</td>
              <td>{record.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccessHistory;
