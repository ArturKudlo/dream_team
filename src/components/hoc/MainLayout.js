import React, { Component } from 'react';

import Header from '../Header/Header';
import './main-layout.scss';

class MainLayout extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="page_container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default MainLayout; 
