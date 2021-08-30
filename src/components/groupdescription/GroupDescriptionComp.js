import React from 'react'
import bg from '../../assets/img/bg.jpg'
import {Container, Row, Image, Col, Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import './groupdescription.css'

export const GroupDescriptionComp = () => {
   const history = useHistory()

   const handleClick = ()=> {
       history.push('./videoconference')
   }
    return (
        <div>
        

<div class="flexbox-container">
    <div><Image src= {bg} className="group-photo" /></div>
    <div className="sidebar">
        <h1>Meeting Details</h1>
       <p> perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate</p>

        <Button variant="success" onClick={handleClick}>Join Conference</Button>
        </div>
    
</div>

<div className="downbar">
    <h1>About Group</h1>
    <p>perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate</p></div>
        </div>
    )
}
