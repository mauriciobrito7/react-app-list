import React from 'react'

// Componente
import Loader from './Loader'

// Estilos
import './scss/PageLoading.scss'

function PageLoading() {
    return (
        <div className="PageLoading">
            <Loader/>
        </div>        
    )
}

export default PageLoading