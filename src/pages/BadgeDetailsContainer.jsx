import React, { Component } from 'react'
import api from '../api'

//components
import PageLoading from '../components/PageLoading'
import PageError from '../components/PageError'
import BadgeDetails from './BadgeDetails'



export default class BadgeDetailsContainer extends Component {
    state = { 
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false
    }

    
    componentDidMount() {
        this.fetchData()
    }


    fetchData = async () =>{
        this.setState({loading:true, error: null})

        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({loading: false, data: data})
        } catch (error) {
            this.setState({loading:false, error: error})
        }

    }

    handleDeleteBadge = async (e) => {
        this.setState({loading:true, error:null})
        
        try {
            await api.badges.remove(this.props.match.params.badgeId)
            this.props.history.push('/badges')

        } catch (error) {
            this.setState({loading:false, error:error})
        }
    }

    handleOpenModal = (e) => {
        this.setState({modalIsOpen: true})
    } 

    handleCloseModal = (e) => {
        this.setState({modalIsOpen: false})
    }

    render() {
       if(this.state.loading){
           return <PageLoading/>
       }
       if(this.state.error){ 
           return <PageError error={this.state.error}/>
       }

        return (
            <BadgeDetails onDeleteBadge={this.handleDeleteBadge} modalIsOpen={this.state.modalIsOpen} onCloseModal={this.handleCloseModal} onOpenModal={this.handleOpenModal}  badge={this.state.data} />
        )
    }
}
