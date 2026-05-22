import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Encabezado from "./components/navegacion/Encabezado";

import Inicio from "./views/Inicio"
import Categoria from "./views/Categoria"
import Catalogo from "./views/Catalogo"
import Productos from "./views/Productos"
import Login from "./views/Login"
import RutaProtegida from "./components/rutas/RutaProtegida"
import Pagina404 from "./views/Pagina404"

import './App.css'

const App = () => {
  return (
    <Router>
      <Encabezado />
      <main className="margen-superior-main">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<RutaProtegida><Inicio /></RutaProtegida>} />
          <Route path="/categorias" element={<RutaProtegida><Categoria /></RutaProtegida>} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/productos" element={<RutaProtegida><Productos /></RutaProtegida>} />
          <Route path="*" element={<Pagina404 />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
