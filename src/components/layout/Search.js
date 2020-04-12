import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import { ClearSearch } from './ClearSearch';

export const Search = () => {
  const [blogTitle, setBlogTitle] = useState('');

  const { searchForBlog, isSearchModeOn, turnSearchModeOn } = useContext(
    GlobalContext
  );

  const onSubmit = (e) => {
    console.log('trigger me');
    e.preventDefault();
    searchForBlog(blogTitle);
    turnSearchModeOn(true);
    setBlogTitle('');
  };

  return (
    <div className='text-centre search-container'>
      <form onSubmit={onSubmit}>
        <label htmlFor='blog-title'>Search: {'  '}</label>
        <input
          required
          type='text'
          className='search-field'
          placeholder='Blog Title. . .'
          value={blogTitle}
          onChange={(e) => {
            setBlogTitle(e.target.value);
          }}
        />
        <input type='submit' value='SUBMIT' className='submit-button' />
      </form>
      {!isSearchModeOn ? '' : <ClearSearch />}
    </div>
  );
};
