import React from "react";
import '../stylesheets/tareas-formulario.css'
function TareasFormulario(props){
    return(
        
            <div className={props.completada ? 'tarea-completada':'tarea-incompleta'}>
                <h3 onClick={() => props.completar(props.id)} className="contenido-tarea">{props.contenido}</h3>
                <button onClick={()=>props.eliminar(props.id)} className="boton-eliminar-tarea">Eliminar</button>    
            </div> 
        
    )
}

export default TareasFormulario