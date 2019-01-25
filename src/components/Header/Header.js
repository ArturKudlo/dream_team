import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';

import './header.scss';

const Header = props => {
  return (
    <div className="header-wrapper">
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            <Link to={'/'} className="header-link">
              Home
            </Link>
            <Link to={'/directors'} className="header-link">
              Directors
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withRouter(Header);