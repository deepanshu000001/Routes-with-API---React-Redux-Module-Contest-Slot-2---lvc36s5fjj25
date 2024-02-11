import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className='nav'>
      <Link to='/' className='site-title'>Site Name</Link>
      <ul>
        <li>
          <Link to='/top-10' className='top-ten'>Top 10</Link>
        </li>
        <li>
          <Link to='/contact' className='contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
