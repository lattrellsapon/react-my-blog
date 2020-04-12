import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

import blogOne from '../images/picone.jpg';
import blogTwo from '../images/pictwo.jpg';
import blogThree from '../images/picthree.jpg';

const today = new Date();
// Initial State
const initialState = {
  isAdminModeOn: false,
  isSearchModeOn: false,
  blogs: [
    {
      id: 1,
      blogTitle: 'Blog One',
      blogBody:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, consequuntur. Repellat perferendis ad optio dicta distinctio consequuntur explicabo odio hic labore saepe, asperiores, similique praesentium! Dolor aut atque ut. Recusandae, nemo harum nobis eos obcaecati molestiae rem dolor aperiam voluptatem totam fugit quo reiciendis nisi placeat ipsum ipsam est nesciunt aut earum repellendus odio commodi asperiores natus! Maxime esse possimus fuga quos asperiores vitae, quasi quae at aliquam non veniam saepe praesentium, ea dignissimos doloremque atque. Dolor quis delectus eum nemo assumenda ex dignissimos dolorem iste, dicta vel vero fugiat reiciendis illo, voluptates deserunt similique explicabo labore corrupti aut. Tempore!',
      blogImage: blogOne,
      isDeleted: false,
      author: 'Anonymous',
      dateOfPublish: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
    },
    {
      id: 2,
      blogTitle: 'Blog Two',
      blogBody:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, consequuntur. Repellat perferendis ad optio dicta distinctio consequuntur explicabo odio hic labore saepe, asperiores, similique praesentium! Dolor aut atque ut. Recusandae, nemo harum nobis eos obcaecati molestiae rem dolor aperiam voluptatem totam fugit quo reiciendis nisi placeat ipsum ipsam est nesciunt aut earum repellendus odio commodi asperiores natus! Maxime esse possimus fuga quos asperiores vitae, quasi quae at aliquam non veniam saepe praesentium, ea dignissimos doloremque atque. Dolor quis delectus eum nemo assumenda ex dignissimos dolorem iste, dicta vel vero fugiat reiciendis illo, voluptates deserunt similique explicabo labore corrupti aut. Tempore!',
      blogImage: blogTwo,
      isDeleted: false,
      author: 'Anonymous',
      dateOfPublish: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
    },
    {
      id: 3,
      blogTitle: 'Blog Three',
      blogBody:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, consequuntur. Repellat perferendis ad optio dicta distinctio consequuntur explicabo odio hic labore saepe, asperiores, similique praesentium! Dolor aut atque ut. Recusandae, nemo harum nobis eos obcaecati molestiae rem dolor aperiam voluptatem totam fugit quo reiciendis nisi placeat ipsum ipsam est nesciunt aut earum repellendus odio commodi asperiores natus! Maxime esse possimus fuga quos asperiores vitae, quasi quae at aliquam non veniam saepe praesentium, ea dignissimos doloremque atque. Dolor quis delectus eum nemo assumenda ex dignissimos dolorem iste, dicta vel vero fugiat reiciendis illo, voluptates deserunt similique explicabo labore corrupti aut. Tempore!',
      blogImage: blogThree,
      isDeleted: false,
      author: 'Anonymous',
      dateOfPublish: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
    },
    ,
    {
      id: 4,
      blogTitle: 'Blog Four',
      blogBody:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia, consequuntur. Repellat perferendis ad optio dicta distinctio consequuntur explicabo odio hic labore saepe, asperiores, similique praesentium! Dolor aut atque ut. Recusandae, nemo harum nobis eos obcaecati molestiae rem dolor aperiam voluptatem totam fugit quo reiciendis nisi placeat ipsum ipsam est nesciunt aut earum repellendus odio commodi asperiores natus! Maxime esse possimus fuga quos asperiores vitae, quasi quae at aliquam non veniam saepe praesentium, ea dignissimos doloremque atque. Dolor quis delectus eum nemo assumenda ex dignissimos dolorem iste, dicta vel vero fugiat reiciendis illo, voluptates deserunt similique explicabo labore corrupti aut. Tempore!',
      blogImage: blogThree,
      isDeleted: false,
      author: 'Anonymous',
      dateOfPublish: `${today.getDate()}/${today.getMonth()}/${today.getFullYear()}`,
    },
  ],
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

  return (
    <GlobalContext.Provider
      value={{
        blogs: state.blogs,
        isAdminModeOn: state.isAdminModeOn,
        isSearchModeOn: state.isSearchModeOn,
        searchResults: state.searchResults,
        noResultsFoundMessage: state.noResultsFoundMessage,
        searchForBlog,
        turnSearchModeOn,
        clearSearch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
