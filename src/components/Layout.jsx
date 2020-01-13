import React from 'react'
import Navbar from './Navbar'

function Layout(props) { //  en los componentes funcioneles los props son único argumento
    // const children = props.children // prop especial para renderizar por dentro del componente
    return (
        <React.Fragment> {/*Es un componente que react entiende  que va hacer que podemos regresar más de un elemento pero parece que regresemos uno*/}
            <Navbar/>
            {props.children}
        </React.Fragment>
    )
}

export default Layout