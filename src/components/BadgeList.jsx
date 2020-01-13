import React, { Component } from 'react'

export class BadgeList extends Component {
    render() {
        return (
            <React.Fragment>
                <ul className="list-unstyled">
                    {this.props.badges.map((badge)=>{ // función map para iterar y transformar cada elemento del arreglo
                        return (
                            <li key={badge.id}> {/*cada elemento en la lista tiene que tener un elemento unico llamado key 
                                      Es un prop que ayuda a react y lo ayuda para poder determinar cuando el elmento se vuelve a renderizar
                            */}
                                <p>{badge.firstName} - {badge.lastName}</p>
                            </li>
                                  )
                    })}
                </ul>                 
            </React.Fragment>
        )
    }
}

export default BadgeList
