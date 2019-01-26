import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, withRouter } from 'react-router-dom';

import { languagesData } from '../../assets/languagesData';

import './header.scss';

class Header extends Component {
  state = {
    language: 'en',
    anchorEl: null
  };

  componentDidMount() {
    const language = localStorage.getItem('language');
    if (language) {
      this.props.setLanguage(language);
      this.setState({ language });
    }
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItem = (language, event) => {
    this.setState({
      anchorEl: null,
      language
    });
    this.props.setLanguage(language);
    localStorage.setItem('language', language);
  };

  render() {
    const {
      anchorEl,
      language
    } = this.state;

    return (
      <div className="header-wrapper">
        <AppBar position="static">
          <Toolbar variant="dense">
            <Typography variant="h6" color="inherit">
              <Link to={'/'} className="header-link">
                {languagesData[language]['HOME']}
              </Link>
              <Link to={'/directors'} className="header-link">
                {languagesData[language]['DIRECTORS']}
              </Link>
            </Typography>
            <div>
              <Button
                className="choose-lenguage-button"
                aria-owns={anchorEl ? 'choose_language' : undefined}
                aria-haspopup="true"
                onClick={this.handleClick}
              >
                {languagesData[language]['LANGUAGE']}
            </Button>
              <Menu
                id="choose_language"
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleMenuItem.bind(this, 'en')}>English</MenuItem>
                <MenuItem onClick={this.handleMenuItem.bind(this, 'ru')}>Русский</MenuItem>
                <MenuItem onClick={this.handleMenuItem.bind(this, 'be')}>Беларускi</MenuItem>
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


export default withRouter(Header);