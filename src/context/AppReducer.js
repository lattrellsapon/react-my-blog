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
    default:
      return state;
  }
};
