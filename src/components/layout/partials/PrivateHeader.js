import React from 'react'
import {  Navbar, Nav} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import '../defaultlayout.css'

export const PrivateHeader = () => {
    return (
        <div>
            <Navbar collapseOnSelect  variant="dark" expand="md" className="color-nav">

<Navbar.Brand>
 SOCIOME
</Navbar.Brand> 

<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
 
  <Nav className="ml-auto">


      <LinkContainer to="/">
     <Nav.Link>FEED</Nav.Link>
     </LinkContainer>

     <LinkContainer to="/">
    <Nav.Link>ACCOUNT</Nav.Link>
    </LinkContainer>
  </Nav>
</Navbar.Collapse>
</Navbar>
        </div>
    )
}
