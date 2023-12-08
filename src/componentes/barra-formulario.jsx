import React, {useState} from "react";
import '../stylesheets/barra-formulario.css'
import { v4 as uuidv4 } from "uuid";

function BarraFormulario(props){

    const [input,setInput] = useState([])

    const manejarCambio = e =>{
        
        setInput(e.target.value)
    }
    const agregarTarea = e =>{
        e.preventDefault()
        const nuevaTarea = {
            id: uuidv4(),
            contenido: input,
            completada:false
        }
        props.onSubmit(nuevaTarea)
        
    }
    return(
        <div className="contenedor-barra">
        <form className="formulario"
        onSubmit={agregarTarea}>

            <input onChange={manejarCambio} className="entrada-textto-tarea" type="text" placeholder="Introduce la tarea" />
            <input className="boton-agregar-tarea" type="submit" value="Agregar" />

        </form>

       
            
        </div>
    )
}

export default BarraFormulario