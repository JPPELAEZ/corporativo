import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("employee");

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const newUser = { id: Date.now(), email, password, role };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Usuario registrado exitosamente");
    setEmail("");
    setPassword("");
    setRole("employee");
  };

  return (
    <div className="register">
      <h2>Registro</h2>
      <input
        type="email"
        placeholder="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="employee">Empleado</option>
        <option value="admin">Administrador</option>
      </select>
      <button onClick={handleRegister}>Registrar</button>
    </div>
  );
};

export default Register;
