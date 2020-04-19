import React from 'react';

export const About = () => {
  return (
    <div className='about-container'>
      <div className='about-header'>
        <h3>About</h3>
      </div>
      <div className='about-body'>
        <p>
          This a simple React application that allows users to read a dummy
          blog. Just simply click on the{' '}
          <span className='highlight-green'> Read More</span> button or the{' '}
          <span className='highlight-green'>Blog Title</span> button. Moreover,
          the user can also search for blogs by using the{' '}
          <span className='highlight-green'>search</span> functionality of the
          application. Simply click the{' '}
          <span className='highlight-green'>Clear Search</span> button if you
          want the application to display the list of blogs again.{' '}
        </p>
        <p>
          If you want to delete and add a new blog, simply log in as an admin by
          clicking on the <span className='highlight-green'>Admin Log In</span>{' '}
          button.
        </p>
        <p>
          <span className='highlight-green'>Username:</span> admin{' '}
        </p>
        <p>
          <span className='highlight-green'>Password:</span> admin{' '}
        </p>
      </div>
    </div>
  );
};
