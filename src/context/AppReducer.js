export default (state, action) => {
  switch (action.type) {
    case 'SEARCH_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter((blog) => {
          return blog.blogTitle === action.payload;
        }),
      };

    case 'TURN_ON_SEARCH_MODE':
      return {
        ...state,
        isSearchModeOn: action.payload,
      };
    case 'TURN_OFF_SEARCH_MODE':
      return {
        ...state,
        isSearchModeOn: action.payload,
        blogs: state.blogs,
      };
    case 'LOG_IN_USER':
      return {
        ...state,
        isAdminModeOn: action.payload,
      };
    case 'LOG_IN_ERROR':
      return {
        ...state,
        isAdminLoginError: action.payload,
      };
    case 'DELETE_BLOG':
      return {
        ...state,
        blogs: state.blogs.filter((blog) => {
          return blog.id !== action.payload;
        }),
      };
    case 'ADD_BLOG':
      return {
        ...state,
        blogs: [action.payload, ...state.blogs],
        isNewBlogAdded: true,
      };
    default:
      return state;
  }
};
