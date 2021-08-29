import React from 'react'
import {Modal, Button} from 'react-bootstrap'

export const PrivateModal = ({show, toggleModal}) => {
    return (
        <div>
      <Modal show={show} onHide={toggleModal} backdrop="static">
			<Modal.Header closeButton>
				<Modal.Title>Edit Category</Modal.Title>
			</Modal.Header>
			<Modal.Body>HI</Modal.Body>
			<Modal.Footer>
				<Button variant="waring" onClick={toggleModal}>
					Close
				</Button>
			</Modal.Footer>
		</Modal>
        </div>
    )
}
