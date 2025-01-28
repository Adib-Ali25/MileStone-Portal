import React from 'react';
import Header from './Header/header';
import Sidebar from './sidebar/SideBar';
import { Outlet } from 'react-router-dom';
import './indexLayout.css'


const IndexLayout = () => {
  return (
    <div className="layout-container">
      <Header />
      <div className="layout-body">
        <Sidebar /><div className="content-container">
          <Outlet /> 
        </div>
      </div>
    </div>
  );
};

export default IndexLayout;

