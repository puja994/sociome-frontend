import React, {useState} from 'react'
import {Button, Form, Modal} from 'react-bootstrap'
import './privategroup.css'
// import {PrivateModal} from './PrivateModal.js'


export const PrivateGroup = () => {

    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (
        
        <div className="private-group">
            
          <Button 
          variant="outline-success"
          className="privategroup-btn"
          onClick={handleShow}
          
          >Join Group</Button>{' '}
          

<Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Join Private Group</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Meeting ID</Form.Label>
    <Form.Control type="number" placeholder="Enter ID" />

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

            </Form.Group>
            </Form>
            

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
       
  

        </div>
        
    )
}
