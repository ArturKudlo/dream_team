import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

import './search-directors.scss';

class SearchDirector extends Component {
  state = {
    search: ''
  }

  handleChange = event => {
    this.setState({
      search: event.target.value,
    });
    this.props.handleSearch(event.target.value)
  };

  render() {

    return (
      <div className="search-directors-wrapper">
        <TextField
          value={this.state.value}
          id="outlined-full-width"
          style={{ margin: 8 }}
          placeholder="Search theater directors"
          fullWidth
          margin="normal"
          variant="outlined"
          onChange={event => this.handleChange(event)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
    );
  }
}

export default SearchDirector;