import React from "react";

const MiComponente = () =>{

        let nombre = "Enzo";
        let web = "unapagina.com";

        let usuario = {
            nombre: "Juan",
            apellidos: "Perez",
            Nacionalidad: "Polaca",
            web: "juanpolaco@web.cl"
        }

        console.log(usuario)

    return (       

        <div className="mi-componente">
            <hr/>
            <h2>Componentes Creados</h2>
            <h3>Datos del usuario: </h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong>  </li>
                <li>Web: {usuario.web}</li>
            </ul>
            <p>Este es primer componente</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </div>
    );
};

export default MiComponente;