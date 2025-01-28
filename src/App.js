import React from 'react';
import { RouterProvider } from 'react-router-dom';

import RoutesMS from './Routes/routes';
const App = () => {
  return (
        <RouterProvider router={RoutesMS} />
  );
};

export default App;