import React from 'react';
import Idear from './Main/Idear'; // Importa el componente para crear recetas
import Historial from './Main/Historial'; // Importa el componente para el historial

const App = () => {
  return (
    <div>
      <Idear />
      <Historial />
    </div>
  );
};

export default App;
