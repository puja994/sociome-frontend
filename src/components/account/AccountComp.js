import React from 'react'
import { Group } from '../../pages/group/Group'
import { CreateGroup } from './CreateGroup'
import { GroupCon } from './GroupCon'
import { PublicDonation } from './PublicDonation'
import {Card} from 'react-bootstrap'
import './accountcomp.css'
export const AccountComp = () => {
    return (
        <div>
                   <Card className="meeting-remainder"> 
    <Card.Body>
      <Card.Title>Group meeting Remainder</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
      <Card.Text>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Text>
    </Card.Body>
  </Card>

  <div className="abc">
            <CreateGroup/>
            <PublicDonation/>

            </div>
            <GroupCon/>
        </div>
    )
}
