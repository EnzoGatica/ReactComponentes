import React from 'react'

export const EventosComponentes = () => {

    const unClick = (e, nombre) => {
        alert("Has hecho un click"+ nombre)
    }

    function dobleClick(e){
        alert("Has hecho doble click");
    }


  return (
    <div>
        <h1>Evento en React</h1>

        {/* Evento Click */}
        <p>
            <button onClick={e => unClick(e," Enzo")}>Dame Click</button>
        </p>
        
        <p>
            <button onDoubleClick={dobleClick}>Dame doble Click</button>
        </p>

    </div>
  )
}
