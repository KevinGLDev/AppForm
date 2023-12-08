import React from "react";
import "../stylesheets/formulario.css"
import TareasFormulario from "./tareas-formulario";
import BarraFormulario from "./barra-formulario";
import { useState } from "react";

function Formulario(){
    const [tareas,setTareas] = useState([])

    const agregarTarea = tarea =>{
        if(tarea.contenido.trim()){
            const tareasActualizadas = [tarea,...tareas]
            setTareas(tareasActualizadas)
            
            
        }else{
            alert('contenido vacio')
        }
    }
    const eliminarTarea = id =>{
        setTareas(tareas.filter(tarea=>tarea.id!==id))
        
    }
    const completarTarea = id =>{
        setTareas(tareas.map(tarea =>{
            if(tarea.id == id){
                tarea.completada = !tarea.completada

            }
            return tarea
        }))
    }
    return (
        <div className="contenedor-formulario">
             <BarraFormulario onSubmit = {agregarTarea}/>
             <div className="lista-tareas">
                {
                    tareas.map((tarea) =>
                        <TareasFormulario 
                        key = {tarea.id}
                        completada = {tarea.completada}
                        contenido = {tarea.contenido}
                        id = {tarea.id}
                        eliminar = {eliminarTarea}
                        completar = {completarTarea}
                        />
                    )
                }
             </div>
        </div>
    )

}


export default Formulario