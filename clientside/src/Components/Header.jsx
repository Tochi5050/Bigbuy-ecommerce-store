import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import {LinkContainer} from 'react-router-bootstrap'


const Header = () => {
  return (
    <>
     <Navbar  expand="lg" variant="light" bg="light" collapseOnSelect>
        
        <Container>
        <LinkContainer to="/">
        <Navbar.Brand>
          
          <strong>BigBuy</strong>
          
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse >
           <Nav className="ms-auto">
           <LinkContainer to="/cart">
            <Nav.Link><FaShoppingCart /> Cart</Nav.Link>
           </LinkContainer>
           <LinkContainer to="/user">
            <Nav.Link><FaUser /> User</Nav.Link>
            </LinkContainer>
            </Nav>
        </Navbar.Collapse >
        </Container>

     </Navbar>
  
    </>
  )
}

export default Header