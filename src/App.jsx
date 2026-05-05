import { useState } from 'react'
import './App.css'

const App = () => {
  const datosPersonales = {
    nombre: "Miguel Angel",
    edad: 20,
    ciudad: "Juigalpa",
    profesion: "Ingeniero de sistemas",
    correo: "ms1941400@email.com",
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Mis Datos Personales</h1>

      <ul>
        <li>
          <strong>Nombre:</strong> {datosPersonales.nombre}
        </li>
        <li>
          <strong>Edad:</strong> {datosPersonales.edad}
        </li>
        <li>
          <strong>Ciudad:</strong> {datosPersonales.ciudad}
        </li>
        <li>
          <strong>Profesión:</strong> {datosPersonales.profesion}
        </li>
        <li>
          <strong>Correo:</strong> {datosPersonales.correo}
        </li>
      </ul>
    </div>
  );
};

export default App;