import React from 'react'
import {Card} from 'react-bootstrap'
import './publicdonation.css'

export const PublicDonation = () => {
    return (
        <div>
     <Card border="success" style={{ width: '18rem' }} className="donation-card">
    <Card.Header>Public Donation</Card.Header>
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
