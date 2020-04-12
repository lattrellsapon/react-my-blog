import React, { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalState';

export const ClearSearch = () => {
  const { clearSearch } = useContext(GlobalContext);

  const toggleSearch = () => {
    clearSearch(false);
    window.location.reload(false);
  };

  return (
    <div>
      <button className='clear-search-button' onClick={toggleSearch}>
        Clear Search
      </button>
    </div>
  );
};
