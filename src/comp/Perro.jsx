import React, { useState, useEffect } from 'react';
import './Perro.css';

function Perro(props) {
    const [traerImg, setTraerImg] = useState(null)
  
    function fetchImg() {
      const traemeloPorfi = fetch(`https://dog.ceo/api/breed/${props.nombre}/images`) //siempre va a pasar esto
      traemeloPorfi.then(respuesta => respuesta.json()).then(dato => setTraerImg(dato.message))
    }
  
    useEffect(() => {fetchImg()}, [])

    return (

      <div className="conPerro">
        {traerImg && <img src={traerImg[0]} alt={props.nombre} />}
        <h2>{props.nombre}</h2>
      </div>

    )
}

export default Perro
