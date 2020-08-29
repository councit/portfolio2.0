import React from 'react';
import './footer.css';

import Navbar from 'react-bootstrap/Navbar';

function MyFooter() {
  return (
    <Navbar bg='dark' variant='dark' className='wrapper'>
      <Navbar.Brand href='#home'>
        <img
          alt=''
          src='/logo.svg'
          width='30'
          height='30'
          className='d-inline-block align-top'
        />{' '}
        Taylor Council
      </Navbar.Brand>
    </Navbar>
  );
}

export default MyFooter;
