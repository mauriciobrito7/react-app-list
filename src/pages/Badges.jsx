import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import api from '../api'

//Componentes
import BadgeList from '../components/BadgeList'
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'


export class Badges extends Component {
    // Estado incial
    state = {
        loading: true,
        error: null,
        data: undefined
    }

    componentDidMount() {
        this.fetchData()
    }
    // Sincronizandos datos
    async fetchData () {
        // cambiamos a true el loading para cada vez que este en false
        this.setState({
            loading: true,
            error: null
        })

        try {
            // obtenemos datos de la api
            const data = await api.badges.list()
            this.setState({
                loading: false,
                error: null,
                data : data
            })
        } catch (error) {
            // si hubo error
            this.setState({
                loading:false,
                error : error
            })
        }

    }

    render() {

        // Si todavía la app esta cargando
        if (this.state.loading) {
            return (<PageLoading/>)
        }

        // Si ha tenido un error
        if(this.state.error) {
            return (<PageError error={this.state.error}/>)
        }

        return (
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">

                        </div>
                    </div>
                </div>

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">New Badge</Link>
                    </div>

                <div className="Badges__list">
                    <div className="Badges__container">
                          <BadgeList badges={this.state.data}/>
                    </div> 
                </div>

                </div>
            </React.Fragment>
        )
    }
}

export default Badges


