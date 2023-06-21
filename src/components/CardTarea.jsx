import React from "react";
import '../styles/CardTarea.css'

const CardTarea = ({tarea}) => {
    const clases = `card ${tarea.importante}`
	const borrar = () => {
		localStorage.removeItem(tarea.id)
		window.location.reload()
	}
	return (
		<div className={clases}>
			<div className="card-title">
				<h3>{tarea.titulo}</h3>
				<div className="delete" onClick={borrar}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
				<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
				</svg></div>
			</div>
			<div className="TareaDescripcion">
				<p>{tarea.descripcion}</p>
			</div>
		</div>
	);
}

export default CardTarea;
