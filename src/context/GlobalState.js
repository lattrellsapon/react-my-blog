import React, { createContext, useReducer } from 'react';
import { v4 } from 'uuid';
import AppReducer from './AppReducer';

import blogOne from '../images/picone.jpg';
import blogTwo from '../images/pictwo.jpg';
import blogThree from '../images/picthree.jpg';

// Initial State
const initialState = {
  isAdminModeOn: false,
  adminUsername: 'admin',
  adminPassword: 'admin',
  isAdminLoginError: false,
  isSearchModeOn: false,
  blogs: [
    {
      id: v4(),
      blogTitle: 'Blog One',
      blogBody:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, consequuntur. Repellat perferendis ad optio dicta distinctio consequuntur explicabo odio hic labore saepe, asperiores, similique praesentium! Dolor aut atque ut. Recusandae, nemo harum nobis eos obcaecati molestiae rem dolor aperiam voluptatem totam fugit quo reiciendis nisi placeat ipsum ipsam est nesciunt aut earum repellendus odio commodi asperiores natus! Maxime esse possimus fuga quos asperiores vitae, quasi quae at aliquam non veniam saepe praesentium, ea dignissimos doloremque atque. Dolor quis delectus eum nemo assumenda ex dignissimos dolorem iste, dicta vel vero fugiat reiciendis illo, voluptates deserunt similique explicabo labore corrupti aut. Tempore!',
      blogImage: blogOne,
      isDeleted: false,
      author: 'Anonymous',
      dateOfPublish: `13/04/2020`,
    },
    {
      id: v4(),
      blogTitle: 'Blog Two',
      blogBody:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, consequuntur. Repellat perferendis ad optio dicta distinctio consequuntur explicabo odio hic labore saepe, asperiores, similique praesentium! Dolor aut atque ut. Recusandae, nemo harum nobis eos obcaecati molestiae rem dolor aperiam voluptatem totam fugit quo reiciendis nisi placeat ipsum ipsam est nesciunt aut earum repellendus odio commodi asperiores natus! Maxime esse possimus fuga quos asperiores vitae, quasi quae at aliquam non veniam saepe praesentium, ea dignissimos doloremque atque. Dolor quis delectus eum nemo assumenda ex dignissimos dolorem iste, dicta vel vero fugiat reiciendis illo, voluptates deserunt similique explicabo labore corrupti aut. Tempore!',
      blogImage: blogTwo,
      isDeleted: false,
      author: 'Anonymous',
      dateOfPublish: `13/04/2020`,
    },
    {
      id: v4(),
      blogTitle: 'Blog Three',
      blogBody:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, consequuntur. Repellat perferendis ad optio dicta distinctio consequuntur explicabo odio hic labore saepe, asperiores, similique praesentium! Dolor aut atque ut. Recusandae, nemo harum nobis eos obcaecati molestiae rem dolor aperiam voluptatem totam fugit quo reiciendis nisi placeat ipsum ipsam est nesciunt aut earum repellendus odio commodi asperiores natus! Maxime esse possimus fuga quos asperiores vitae, quasi quae at aliquam non veniam saepe praesentium, ea dignissimos doloremque atque. Dolor quis delectus eum nemo assumenda ex dignissimos dolorem iste, dicta vel vero fugiat reiciendis illo, voluptates deserunt similique explicabo labore corrupti aut. Tempore!',
      blogImage: blogThree,
      isDeleted: false,
      author: 'Anonymous',
      dateOfPublish: `13/04/2020`,
    },
    {
      id: v4(),
      blogTitle: 'Blog Four',
      blogBody:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, consequuntur. Repellat perferendis ad optio dicta distinctio consequuntur explicabo odio hic labore saepe, asperiores, similique praesentium! Dolor aut atque ut. Recusandae, nemo harum nobis eos obcaecati molestiae rem dolor aperiam voluptatem totam fugit quo reiciendis nisi placeat ipsum ipsam est nesciunt aut earum repellendus odio commodi asperiores natus! Maxime esse possimus fuga quos asperiores vitae, quasi quae at aliquam non veniam saepe praesentium, ea dignissimos doloremque atque. Dolor quis delectus eum nemo assumenda ex dignissimos dolorem iste, dicta vel vero fugiat reiciendis illo, voluptates deserunt similique explicabo labore corrupti aut. Tempore!',
      blogImage: blogThree,
      isDeleted: false,
      author: 'Anonymous',
      dateOfPublish: `13/04/2020`,
    },
  ],
  isNewBlogAdded: false,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions will go here
  function searchForBlog(blogTitle) {
    dispatch({
      type: 'SEARCH_BLOG',
      payload: blogTitle,
    });
  }

  function turnSearchModeOn(isSearchModeOn) {
    dispatch({
      type: 'TURN_ON_SEARCH_MODE',
      payload: isSearchModeOn,
    });
  }

  function clearSearch(isSearch) {
    dispatch({
      type: 'TURN_OFF_SEARCH_MODE',
      payload: isSearch,
    });
  }

  function loginUser(isUserLoggedIn) {
    dispatch({
      type: 'LOG_IN_USER',
      payload: isUserLoggedIn,
    });
  }

  function setLoginError(isLoginError) {
    dispatch({
      type: 'LOG_IN_ERROR',
      payload: isLoginError,
    });
  }

  function deleteBlog(blogId) {
    dispatch({
      type: 'DELETE_BLOG',
      payload: blogId,
    });
  }

  function addNewBlog(newBlog) {
    dispatch({
      type: 'ADD_BLOG',
      payload: newBlog,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        blogs: state.blogs,
        isAdminModeOn: state.isAdminModeOn,
        isSearchModeOn: state.isSearchModeOn,
        searchResults: state.searchResults,
        noResultsFoundMessage: state.noResultsFoundMessage,
        adminUsername: state.adminUsername,
        adminPassword: state.adminPassword,
        isAdminLoginError: state.isAdminLoginError,
        isNewBlogAdded: state.isNewBlogAdded,
        searchForBlog,
        turnSearchModeOn,
        clearSearch,
        setLoginError,
        loginUser,
        deleteBlog,
        addNewBlog,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
