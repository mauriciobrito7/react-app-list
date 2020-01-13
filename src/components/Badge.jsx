import React, { Component } from 'react'
import "./scss/Badge.scss"
export class Badge extends Component {
    render() {
        return (
            <div >
                <div>
                    <img src="" alt=""/>
                </div>

                <div>
                    <img src="" alt="Avatar"/>
                    <h1>{this.props.firstName} <br/>{this.props.lastName}</h1>
                </div>
                <div>
                    <p>{this.props.jobTitle}</p>
                    <p>@{this.props.instagram}</p>
                </div>
                <div>{this.props.email}</div>
            </div>
        )
    }
}

export default Badge
