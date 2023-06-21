import React from 'react';
import '../styles/input.css'

const Input = () => {
    const alerta = () => {
        const title = document.querySelector('#titulo')
        const descripcion = document.querySelector('#descripcion')
        const important = document.querySelector('#importante')
        if (descripcion.value === "" ){
            alert('no se a ingresado ninguna descripcion')
        } else {
            const check = () => {
                if (important.checked){
                    return ("red")
                } else {
                    return ("normal")
                } 
            }
            let val = check()
            const obj = {
                "id": localStorage.length+1,
                "titulo" : title.value,
                "descripcion": descripcion.value,
                "importante": val
            }
            localStorage.setItem(localStorage.length+1,JSON.stringify(obj))
        }
    }

	return (
        <div className='label-input'>
            <label htmlFor="titulo" />
            <input className="titulo" type="text" placeholder="Titulo" name="titulo" id='titulo'/>
            <label htmlFor="descripcion" />
            <input className="description" type="text" placeholder="Descripcion" name="titulo" id='descripcion' />
            <label htmlFor="importante" />
            <input className="importante" type="checkbox" id='importante' name='importante'/>Importante! 
            <button className="btn" onClick={alerta}>Agregar</button>
        </div>
	);
}

export default Input;