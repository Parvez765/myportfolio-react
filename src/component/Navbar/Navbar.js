import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Menubar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='navItem'>
                <Container>
                    {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto p-4">
                       <Link to="/" className='me-3'>Home</Link>
                       <Link to="/service">Services</Link>
                        {/* <Nav.Link href="#pricing">Contact</Nav.Link> */}
                    
                    </Nav>
                   
                    </Navbar.Collapse>
                </Container>
            </Navbar>
  
        </div>
    );
};

export default Menubar;