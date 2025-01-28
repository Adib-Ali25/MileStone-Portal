// import { lazy } from 'react';
// import Loadable from '../components/Loadable';
import IndexLayout from '../layouts/indexLayout';
import IndexPages from '../Pages/indexPages';
import Login from '../authentication/login/login';
import Signup from '../authentication/signup/signup';
//import IndexAuth from '../authentication/IndexAuth';
import Forgot from '../authentication/forgot/forgot';

const MainRoutes = {
    path: '/',
    element: < Login />,
    children: [
      
      {
        path: '/IndexLayout',
        element: <IndexLayout />
      },
    
      {
        path: '/IndexPages',
        element: <IndexPages />
      },
      
    ]
  }
  
  export default MainRoutes; 