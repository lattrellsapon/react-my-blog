import React, { useState, useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

import { LogInError } from './LogInError';

export const AdminForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const {
    adminUsername,
    adminPassword,
    isAdminLoginError,
    loginUser,
    setLoginError,
  } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === adminUsername && password === adminPassword) {
      loginUser(true);
      setUsername('');
      setPassword('');
    } else {
      setLoginError(true);
    }
  };

  return (
    <div>
      <div className='form-container text-centre'>
        <form onSubmit={onSubmit}>
          <div className='username-container'>
            <label htmlFor='username'>Username: </label>
            <input
              type='text'
              className='username-field'
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div className='password-container'>
            <label htmlFor='username'>Password: </label>
            <input
              type='password'
              className='password-field'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <div className='log-in-container'>
            <input type='submit' value='LOG IN' className='log-in-button' />
          </div>
        </form>
      </div>
      <div>{isAdminLoginError ? <LogInError /> : ''}</div>
    </div>
  );
};
