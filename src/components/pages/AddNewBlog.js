import React, { useState, useContext } from 'react';
import { v4 } from 'uuid';
import defaultPic from '../../images/default.png';

import { BlogAddedMessage } from './BlogAddedMessage';

import { GlobalContext } from '../../context/GlobalState';

export const AddNewBlog = () => {
  const [blogTitle, setBlogTitle] = useState('');
  const [blogBody, setBlogBody] = useState('');
  const [blogAuthor, setBlogAuthor] = useState('');
  const [blogPublishDate, setBlogPublishDate] = useState('');

  const { addNewBlog, isNewBlogAdded } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: v4(),
      blogTitle,
      blogBody,
      blogImage: defaultPic,
      author: blogAuthor,
      dateOfPublish: blogPublishDate,
      isDeleted: false,
    };
    console.log(newBlog);
    addNewBlog(newBlog);
    setBlogTitle('');
    setBlogPublishDate('');
    setBlogBody('');
    setBlogAuthor('');
    setBlogPublishDate('');
  };

  return (
    <div className='new-blog-container'>
      <form onSubmit={onSubmit}>
        <div className='blog-image-container'>
          <h3>
            As this is only a front end application, we will provide a default
            picture for your blog.
          </h3>
        </div>
        <div className='blog-title-container'>
          <label htmlFor='blog-title'>Blog title: </label>
          <input
            required
            type='text'
            className='blog-title'
            value={blogTitle}
            onChange={(e) => {
              setBlogTitle(e.target.value);
            }}
          />
        </div>
        <div className='blog-content-container'>
          <label htmlFor='blog-content'>Blog content: </label>
          <textarea
            required
            className='blog-content'
            value={blogBody}
            onChange={(e) => {
              setBlogBody(e.target.value);
            }}
          />
        </div>
        <div className='blog-author-container'>
          <label htmlFor='blog-author'>Blog Author: </label>
          <input
            required
            type='text'
            className='blog-author'
            value={blogAuthor}
            onChange={(e) => {
              setBlogAuthor(e.target.value);
            }}
          />
        </div>
        <div className='blog-publish-date-container'>
          <label htmlFor='blog-publish-date'>Publish Date: </label>
          <input
            required
            type='date'
            className='blog-publish-date'
            value={blogPublishDate}
            onChange={(e) => {
              // setBlogTitle(e.target.value);
              setBlogPublishDate(e.target.value.toString());
            }}
          />
        </div>
        <div className='blog-submit-container'>
          <input type='submit' value='ADD' className='add-new-blog-button' />
        </div>
      </form>
      <div>{isNewBlogAdded ? <BlogAddedMessage /> : ''}</div>
    </div>
  );
};
