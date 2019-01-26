import React from 'react';
import './main-layout.scss';
const MainLayout = props => (
  <div className="page_container">
    {props.children}
  </div>
)

export default MainLayout;