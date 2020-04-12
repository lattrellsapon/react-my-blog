import React, { useContext } from 'react';
import { BlogItem } from './BlogItem';
import { Search } from '../layout/Search';

import { GlobalContext } from '../../context/GlobalState';

export const Blogs = () => {
  const { blogs, isAdminModeOn } = useContext(GlobalContext);

  return (
    <div>
      <Search />
      <div className='blog-blurb'>
        {blogs.length === 0 ? (
          <h3>
            No results found. Please be aware that the titles are case
            sensitive.
          </h3>
        ) : (
          <h3>POSTS</h3>
        )}
      </div>
      <div className='blog-container'>
        {blogs.map((blogItem) => (
          <BlogItem key={blogItem.id} blogItem={blogItem} />
        ))}
      </div>
    </div>
  );
};
