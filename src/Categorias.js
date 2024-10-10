import React, {useState, useEffect} from "react";

function Categorias(){
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/categorias')
        .then(response => response.json())
        .then(data => setCategorias(data));
    }, []);

    return (
        <div>
            <h2>Lista de Categorias</h2>
            <ul>
                {categorias.map(categoria => (
                    <li key={categoria.id}>{categoria.nombre}</li>
                ))}
            </ul>
        </div>
    );
}

export default Categorias;