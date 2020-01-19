import React from 'react'
import ReactDOM from 'react-dom'
import './scss/modal.scss'

function Modal(props) {

    if (!props.isOpen) {
        return null
    }

    return (
        <div>
            {/*recibe dos argumentos el_que y el_donde */
                ReactDOM.createPortal(
                <div className="Modal">
                    <div className="Modal__container">
                        <button onClick={props.onClose} className="Modal__close-button">X</button>
                        {/*Dentro del modal hay contenido y ese contenido va a depender de lo que haga cada modal pero siempre
                        va a venir a traves de los children 
                        La técnica de usar componentes genericos para usar uno nuevo especializado se llama composición 
                        */}
                        {props.children}
                    </div>
                </div>, 
                document.getElementById('modal')
                )
            }
        </div>
    )
}

export default Modal
