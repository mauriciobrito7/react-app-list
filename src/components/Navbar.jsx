import React, { Component } from 'react'
import logo from '../images/logo.png'
import './scss/Navbar.scss'

export class Navbar extends Component {
    render() {
        return (
            <a href="/">
                <img className="logo" src={logo} alt="Logo"/>
                <span className="" >BRB</span>
                <span>Conf</span>
            </a>
        )

    }
}
export default Navbar
