import React, { useContext } from 'react';
import { useParams, Link } from 'react-router-dom';

import { GlobalContext } from '../../context/GlobalState';

export const Blog = () => {
  const { blogs } = useContext(GlobalContext);

  const { id } = useParams();

  const currentBlog = blogs.filter((blog) => {
    return blog.id === parseInt(id);
  });

  console.log(currentBlog);

  return (
    <div className='current-blog'>
      <div>
        <Link to='/' className='back-button'>
          BACK
        </Link>
      </div>
      <div className='current-blog-img'>
        <img src={currentBlog[0].blogImage} alt='' />
      </div>
      <div className='current-blog-content'>
        <div className='current-blog-header'>
          <h1>{currentBlog[0].blogTitle}</h1>
          <h3>
            by {currentBlog[0].author} ({currentBlog[0].dateOfPublish})
          </h3>
        </div>
        <div className='current-blog-body'>
          <p>{currentBlog[0].blogBody}</p>
        </div>
      </div>
    </div>
  );
};
