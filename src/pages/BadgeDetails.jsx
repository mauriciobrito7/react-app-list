 import React from 'react'
 import { Link } from 'react-router-dom'

// Components
 import Badge from '../components/Badge'
 import DeleteBadgeModal  from '../components/DeleteBadgeModal'

 function BadgeDetails(props) {
     const badge = props.badge
     return (
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            logo
                        </div>
                        <div className="col">
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <Badge 
                    firstName={badge.firstName } 
                    lastName={badge.lastName}
                    email={badge.email}
                    jobTitle={badge.jobTitle}
                    instagram={badge.instagram}/>
                </div>
                <div className="col">
                    <h2>Actions</h2>
                    <div><Link to={`/badges/${badge.id}/edit`}>Edit</Link></div>
                    <div>
                        <button onClick={props.onOpenModal} className="btn btn-danger">delete</button>
                        <DeleteBadgeModal onDeleteBadge={props.onDeleteBadge} isOpen={props.modalIsOpen} onCloseModal={props.onCloseModal} onOpenModal={props.onOpenModal}/>
                    </div>
                </div>
            </div>
        </div>
     )
 }
 
 export default BadgeDetails
 