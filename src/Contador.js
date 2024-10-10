import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const manejarClick = () => {
    console.log(contador); // Agregar esto para ver si se actualiza
    setContador(contador + 1);
  };

  return (
    <div>
      <h1>Contador: {contador}</h1>
      <button onClick={manejarClick}>Incrementar</button>
    </div>
  );
}

export default Contador;
