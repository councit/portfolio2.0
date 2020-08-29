import React from 'react';

//Bootstrap imports
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function MyNav() {
  return (
    <div className='nav-body'>
      <Navbar bg='dark' variant='dark'>
        <Navbar.Brand href='#home'>Taylor Council</Navbar.Brand>
        <Nav className='mr-auto justify-content-end'>
          <Nav.Link href='#home'>About Me</Nav.Link>
          <Nav.Link href='#features'>Resume</Nav.Link>
          <Nav.Link href='#pricing'>Projects</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default MyNav;
