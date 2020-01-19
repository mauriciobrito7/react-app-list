import React from 'react'

// Components
import Modal from './Modal'

function DeleteBadgeModal(props) {
    return (
    <Modal isOpen={props.isOpen} onClose={props.onCloseModal} onOpen={props.onOpenModal}>
        <div className="DeleteBadgeModal">
            <h1>Are You Sure?</h1>
            <p>You are about to delete this badge.</p>
            <button onClick={props.onDeleteBadge} className="btn btn-danger">Delete</button>
            <button onClick={props.onCloseModal} className="btn btn-primary">Cancel</button>
        </div>
    </Modal>
    )
}

export default DeleteBadgeModal
