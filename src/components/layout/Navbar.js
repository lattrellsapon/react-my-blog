import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

export default function Navabar() {
  const { isAdminModeOn, loginUser } = useContext(GlobalContext);

  const logOutButton = () => {
    loginUser(false);
  };

  return (
    <nav className='flex-container text-centre'>
      <div className='right admin-container'>
        {isAdminModeOn ? (
          <button className='log-out-button' onClick={logOutButton}>
            Log out Admin
          </button>
        ) : (
          <Link to='/admin' className='link'>
            Admin Log In
          </Link>
        )}
      </div>
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
        </ul>
      </div>
    </nav>
  );
}
