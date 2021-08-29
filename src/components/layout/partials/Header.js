import React from 'react'
import { Link, useHistory } from "react-router-dom";
import {  Navbar, Nav} from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"
import '../defaultlayout.css'

export const Header = () => {
    return (
        <Navbar collapseOnSelect  variant="dark" expand="md" className="color-nav">

        <Navbar.Brand>
         SOCIOME
        </Navbar.Brand> 

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
         
          <Nav className="ml-auto">


              <LinkContainer to="/">
             <Nav.Link>LOGIN</Nav.Link>
             </LinkContainer>

             <LinkContainer to="signup">
            <Nav.Link>SIGNUP</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

     
    )
}
