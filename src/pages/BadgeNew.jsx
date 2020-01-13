import React, { Component } from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

// API
import api from '../api'
import PageLoading from '../components/PageLoading'

export class BadgeNew extends Component {
   //Tenemos que inicializar el estado para que pueda leer desde el input e inicializamos los valores para que no de warning
    state = { 
        form: {
        firstName:'',
        lastName: '',
        email:'',
        jobTitle: '',
        instagram: ''
        },
        loading: false,
        error: null
    }

    handleChange = e => {
        this.setState( { 
            form: {
                // para no sobreescribir la información anterior al ser llamado el setState
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = async e =>{
        e.preventDefault()
        this.setState({
            loading: true,
            error: null
        })

        try {
            
           await api.badges.create(this.state.form)
            this.setState({loading:false})

            // Redirigir al usuario a badges
            this.props.history.push('/badges')

        } catch (error) {
            this.setState({
                loading: false,
                error: error
            })
        }


    }

    render() {
        if(this.state.loading){
          return <PageLoading/>     
        }
        return (
            <React.Fragment>
                <Badge 
                firstName={this.state.form.firstName || 'FIRST NAME' } 
                lastName={this.state.form.lastName || 'LAST NAME' }
                email={this.state.form.email || 'EMAIL'}
                jobTitle={this.state.form.jobTitle || 'JOB TITLE'}
                instagram={this.state.form.instagram || 'INSTAGRAM'}/> 

                <BadgeForm error={this.state.error} onSubmit={this.handleSubmit} onChange={this.handleChange } formValues={this.state.form}/>
            </React.Fragment>
            
        )
    }
}

export default BadgeNew
