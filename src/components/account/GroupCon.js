import React from 'react'
import {Card, Button} from 'react-bootstrap'
import {Link} from 'react-router-bootstrap'
import './groupcon.css'
import bg from '../../assets/img/bg.jpg'
import {useHistory} from 'react-router-dom'

export const GroupCon = () => {
    const history = useHistory()

    const handleClick = () => {
        history.push('./groupdescription')
    }
    return (
        <div>
            
  <Card className="text-center group-card">
  
  <Card.Header>Nepalese in IT meetup</Card.Header>
  <Button onClick={handleClick}>View Group</Button>
  <Card.Body>
    <Card.Title>Resume writing session</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
      
    </Card.Text>
    <Button variant="success">Join Group Conference</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 days ago</Card.Footer>
</Card>


        </div>
    )
}
