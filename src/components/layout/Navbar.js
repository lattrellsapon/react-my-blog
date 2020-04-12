import React from 'react';

import { Link } from 'react-router-dom';

export default function Navabar() {
  return (
    <nav className='flex-container text-centre'>
      <div className='flex-box'>
        <h1>Blog Creating</h1>
      </div>
      <div className='flex-box'>
        <ul>
          <li>
            <Link to='/' className='link'>
              Home
            </Link>
          </li>
          <li>
            <Link to='/about' className='link'>
              About
            </Link>
          </li>
          <li>
            <Link to='/admin' className='link'>
              Become an admin <i className='fas fa-lock'></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
