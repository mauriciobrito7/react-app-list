import React, { Component } from 'react'

export class BadgeForm extends Component {
    //Tenemos que inicializar el estado para que pueda leer desde el input
    // state = { }

    handleChange = (e) => { 
        /* console.log({
            name: e.target.name,
            value: e.target.value}) */

        // A setState le tenemos que pasar un objeto con la información que queremos guardar
        // modificar el estado
        this.setState({
            // Encerramos en corchetes para que el nombre de la variable sea varible
            [e.target.name]: e.target.value
        })
    }
    //manejar click
    handleClick = (e) =>{
        console.log('hice click')

    }

    render() {
        return (
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.props.onSubmit}> {/** Función de props */}
                    <div className="form-group">
                        <label>First Name</label>
                        {/*Estamos usando el value para convertir el input de no controlado a controlado y así solo el valor venga desde el estado */}
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}/>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}/>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}/>
                    </div>
                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}/>
                    </div>
                    <div className="form-group">
                        <label>Instagram</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="instagram" value={this.props.formValues.instagram}/>
                    </div>
                    <button onClick={this.handleClick} >Save</button> {/* todo boton en un formulario es tipo submit*/}
                    
                    {//* Si existe entonces.. */
                        this.props.error && (
                        <p>{this.props.error.message}</p>
                        )

                    }
                </form>
            </div>
        )
    }
}

export default BadgeForm
