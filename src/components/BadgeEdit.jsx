import React, { Component } from 'react'
import Badge from '../components/Badge'
import BadgeForm from '../components/BadgeForm'

// API
import api from '../api'
import PageLoading from '../components/PageLoading'

export class BadgeEdit extends Component {
   //Tenemos que inicializar el estado para que pueda leer desde el input e inicializamos los valores para que no de warning
    state = { 
        form: {
        firstName:'',
        lastName: '',
        email:'',
        jobTitle: '',
        instagram: ''
        },
        loading: true, // como vamos a iniciar con una petición se hace cierto
        error: null
    }

    componentDidMount() {
        this.fecthData()
    }

    fecthData = async e => { 
        this.setState({
            loading: true, error: null
        })

        try {
            const data = await api.badges.read(
                // cada una de esas variables que declaramos en la ruta, lo podemos acceder dentro del objeto params
                this.props.match.params.badgeId
            )
            this.setState({loading: false, form: data})    
        } catch (error) {
            this.setState({loading: false, error: error})
        }
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
            // actualizar   
           await api.badges.update(this.props.match.params.badgeId,this.state.form)
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
                <h1>Edit</h1>
                <BadgeForm error={this.state.error} onSubmit={this.handleSubmit} onChange={this.handleChange } formValues={this.state.form}/>
            </React.Fragment>
            
        )
    }
}

export default BadgeEdit
