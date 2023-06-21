import React from 'react';
import CardTarea from '../components/CardTarea';
import '../styles/ListaTarea.css'

const ListaTarea = () => {
    let array =[]
    for (let x=0; x<=localStorage.length-1; x++)  {  
        let clave = localStorage.key(x); 
        array.push(JSON.parse(localStorage.getItem(clave)))
    }
	
    return (
        <div className='contenedor-tareas'>
            {array.map( tarea => (
                <CardTarea tarea={tarea} key={tarea.titulo}/> 
            ))}
        </div>
    );
}

export default ListaTarea;