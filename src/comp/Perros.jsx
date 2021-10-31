
import Perro from './Perro'
import './Perros.css'
import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';

function Perros({buscar}) { //al pasar una prop react lo recibe adentro del objeto
    const [traerPerros, setTraerPerros] = useState(null)
  
    function fetchNombre() {
      const traemeloPorfi = fetch("https://dog.ceo/api/breeds/list/all")
      traemeloPorfi.then(respuesta => respuesta.json()).then(dato => setTraerPerros(dato.message))
    }
  
    useEffect(() => {fetchNombre()}, [])

    const breakpoints = {
        default: 3,
        900: 2,
        500: 1
    }

    return (
        <Masonry breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">

        {traerPerros && Object.entries(traerPerros).map(elemento => {
        if (buscar !== "" && !elemento[0].includes(buscar)) {
            return null
        }   

        return <div className="li">
                    <Perro nombre={elemento[0]}/>
                </div>
        })}

        </Masonry>
    )
}

export default Perros
