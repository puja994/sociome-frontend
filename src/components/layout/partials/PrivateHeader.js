import React from 'react'
import {  Navbar, Nav} from "react-bootstrap"
import { LinkContainer, Tooltip, OverlayTrigger, Button, Image, NavDropdown, Item,Container, Dropdown} from "react-router-bootstrap"
import '../defaultlayout.css'

export const PrivateHeader = () => {

   

    return (
        <div>
            <Navbar collapseOnSelect  variant="dark" expand="md" className="color-nav" sticky="top">

<Navbar.Brand>
 SOCIOME
</Navbar.Brand> 

<Navbar.Toggle aria-controls="basic-navbar-nav" />
<Navbar.Collapse id="basic-navbar-nav">
 
  <Nav className="ml-auto">


      {/* <LinkContainer to="/account">
     <Nav.Link>Account</Nav.Link>
     </LinkContainer> */}

     <LinkContainer to="/account">
    <Nav.Link>
    


        <i class="fas fa-user-circle fa-2x"></i>

        
        
        </Nav.Link>

       

    </LinkContainer>
  </Nav>

 

</Navbar.Collapse>

</Navbar>
        </div>
    )
}
