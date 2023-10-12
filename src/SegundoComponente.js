import React from 'react'

export const SegundoComponente = () => {
  
    const libros  = ["Harry Potter", "juego de tronos", "Caperucita Roja"];
    //const libros = [];

    return (
    <div className='segundo-componente'>
        <h1>Lista de libros</h1>

        {libros.length >= 1 ?
        
            (<ul>
                {
                    libros.map((libro, indice) =>{
                        return <li key={indice}>{libro}</li>;
                    })
                }
            </ul>)
            : (<p>No hay libros</p>)
        }

    </div>
  )
}
