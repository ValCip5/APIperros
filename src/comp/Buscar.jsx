import React from 'react'
import './Buscar.css'

function Buscar({buscar, actualizar}) {
    function handleChange(event) {
        actualizar(event.target.value)
    }
    return (
        <div className="divInput">
            <input onChange={handleChange} type="text" value={buscar} placeholder="Buscar"/>
        </div> // le asigno la variable buscar al valor
    )
}

export default Buscar
