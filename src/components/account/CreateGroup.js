import React from 'react'
import {Card} from 'react-bootstrap'

export const CreateGroup = () => {
    return (
        <div>
              <Card border="success" style={{ width: '18rem' }}>
    <Card.Header>Create New Group</Card.Header>
    <Card.Body>
      {/* <Card.Title>Success Card Title</Card.Title> */}
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
        </div>
    )
}
