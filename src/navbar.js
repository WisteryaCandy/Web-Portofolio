import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './navbar.css';


function OffcanvasExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-3">
      <Container fluid>
      <Navbar.Brand  className="d-flex align-items-center navbar-brand-container">
            <img src="/assets/eu.jpg" className="myicon" alt="myicon" />
            <div className="d-flex flex-column ml-3 name-container">
              <p className="myname">Daria Giotina</p>
              <p className="personal">Personal</p>
            </div>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Personal webpage
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav className="nav-links">
              <Nav.Link href="#Frame2" className="link-aboutme1">About me</Nav.Link>
              <Nav.Link href="#Frame3" className="link-academics1">Academics</Nav.Link>
              <Nav.Link href="#Frame4" className="link-projects1">Projects</Nav.Link>
              <Nav.Link href="#Frame5" className="link-Contact1">Contact</Nav.Link>
            </Nav>
             </Nav>


             <div className="lets_talk_border" >
             <div className='button1 effect effect-2' >
              <a className="lets_talk_text" href="mailto:dariawisterya@gmail.com">Let's Talk</a>
             </div>       
            </div>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default OffcanvasExample;
