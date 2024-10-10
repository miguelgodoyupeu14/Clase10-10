import React, { useState, useEffect } from "react";
import './Libros.css'; // Asegúrate de tener este archivo CSS

function Libros() {
    const [libros, setLibros] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/libros')
            .then(response => response.json())
            .then(data => setLibros(data));
    }, []);

    return (
        <div className="container">
            <h2>Lista de Libros</h2>
            <table className="libros-table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Páginas</th>
                        <th>Editorial</th>
                        <th>Sección</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map(libro => (
                        <tr key={libro.id}>
                            <td>{libro.titulo}</td>
                            <td>{libro.paginas}</td>
                            <td>{libro.editorial?.nombre}</td>
                            <td>{libro.seccion?.nombre}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Libros;
