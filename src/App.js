import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Inicio from './Inicio';
import AcercaDe from './AcercaDe';
import Contacto from './Contacto';
import Usuarios from './Usuarios';
import Categorias from './Categorias';
import Libros from './Libros';

function App() {
  return (
    <Router>
      <header className="app-header">
        <nav>
          <ul className="nav-list">
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/about">Acerca de</Link></li>
            <li><Link to="/contact">Contacto</Link></li>
            <li><Link to="/usuarios">Usuarios</Link></li>
            <li><Link to="/categorias">Categorias</Link></li>
            <li><Link to="/libros">Libros</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/about" element={<AcercaDe />} />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/categorias" element={<Categorias />} />
          <Route path="/libros" element={<Libros />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;









/*import Contador from './Contador';

function App() {
  return (
    <div className="App">
      <h1>Práctica: Manejo de Eventos en React</h1>
      <Contador />
    </div>
  );
}*/


