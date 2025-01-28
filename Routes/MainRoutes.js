import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from '../authentication/login/login';
import Signup from '../authentication/signup/signup';
import Forgot from '../authentication/forgot/forgot';
import IndexLayout from '../layouts/indexLayout';
import IndexPages from '../Pages/indexPages';

const router = createBrowserRouter([
  {
    path: '/login', 
    element: <Login />, 
  },
  {
    path: '/signup',
    element: <Signup />, 
  },
  {
    path: '/forgot',
    element: <Forgot />, 
  },
  {
    path: '/dashboard', 
    element: <IndexLayout />,
    children: [
      {
        path: '/dashboard/home',
        element: <IndexPages />,
      },
    ],
  },
]);


const MainRoutes = () => { 
  return <RouterProvider router={router} />;
};

export default MainRoutes;
