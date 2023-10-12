import React from 'react'
import PropTypes from "prop-types";

export const TercerComponentes = ({nombre,apellido,ficha}) => {

    //console.log(props);

  return (
    <div>
        <h1>Comunicacion entre componente</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellido}</li>
            <li>{ficha.estado}</li>
            <li>{ficha.altura}</li>
        </ul>
    </div>
  )
}

TercerComponentes.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellido: PropTypes.string,
    ficha: PropTypes.object
}

TercerComponentes.defauldProps = {
    nombre: "Pepito",
    apellido: "Alvarez"
}