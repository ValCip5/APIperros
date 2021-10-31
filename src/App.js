import React, {useState} from 'react';
import './App.css';
import Perros from './comp/Perros'; // que sepa cual es la busqueda
import Header from './comp/Header';
import Buscar from './comp/Buscar';


function App() {
  const [buscar, setBuscar] = useState("") //setbuscar es para actualizar el estado
  //buscar es para vincular

  return (
    <div className="App">
      
      <div>
          <Header/>
          <Buscar buscar={buscar} actualizar={setBuscar}/>
          <Perros buscar={buscar} />
      </div>
    </div>
  );
}

export default App;
