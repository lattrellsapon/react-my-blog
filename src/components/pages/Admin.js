import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';

import { Blogs } from '../blogs/Blogs';

import { AdminForm } from './AdminForm';

export const Admin = () => {
  const { isAdminModeOn } = useContext(GlobalContext);

  if (isAdminModeOn) {
    return <Blogs />;
  } else {
    return <AdminForm />;
  }
};
