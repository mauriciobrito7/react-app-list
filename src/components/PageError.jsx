import React from 'react'

// estilos
import './scss/PageError.scss'

function PageError (props){
    return (
        <div className="PageError">
            {props.error.message}
        </div> 
        )
}

export default PageError