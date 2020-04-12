import React from 'react';
import { Link } from 'react-router-dom';

export const BlogItem = ({ blogItem }) => {
  const blogPreview = blogItem.blogBody.substr(0, 100);

  return (
    <div className='blog-item-container'>
      <div className='image-container'>
        <img src={blogItem.blogImage} alt='' />
      </div>
      <div className='preview-container'>
        <h3>
          <Link to={`/blog/blog-item/${blogItem.id}`} className='blog-link'>
            {blogItem.blogTitle}
          </Link>
        </h3>
        <p>
          {blogPreview} ...{' '}
          <Link to={`/blog/blog-item/${blogItem.id}`} className='blog-link'>
            Read More
          </Link>
        </p>
      </div>
    </div>
  );
};
