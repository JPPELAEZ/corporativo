import React, { useEffect, useState } from "react";

const Statistics = () => {
  const [accessRecords, setAccessRecords] = useState([]);
  const [earlyAccessCount, setEarlyAccessCount] = useState(0);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("accessRecords")) || [];
    setAccessRecords(storedRecords);

    const earlyAccess = storedRecords.filter((record) => {
      const [hours, minutes] = record.time.split(":").map(Number);
      return hours === 7 && minutes <= 30;
    });

    setEarlyAccessCount(earlyAccess.length);
  }, []);

  return (
    <div>
      <h2>Estadísticas de Empleados</h2>
      <p>
        Empleados registrados entre las 7:00 am y las 7:30 am: <strong>{earlyAccessCount}</strong>
      </p>
    </div>
  );
};

export default Statistics;
