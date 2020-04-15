import React from 'react';

export const About = () => {
  return (
    <div className='about-container'>
      <div className='about-header'>
        <h3>About</h3>
      </div>
      <div className='about-body'>
        <p>
          This a simple react application that allows users to read a dummy
          blog. Just simply click on the Read More button or the Blog Title.
          Moreover, the user can also search for blogs by using the search
          functionality of the application. Simply click the Clear Search button
          if you want the application to display the list of blogs again.{' '}
        </p>
        <p>
          If you want to add, delete and update a blog, simply log in as an
          admin by clicking on the Become an admin button.
        </p>
      </div>
    </div>
  );
};
