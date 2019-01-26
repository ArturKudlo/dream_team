import React, { Component } from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import { withStyles } from '@material-ui/core/styles';

import PageTop from '../shared/PageTop/PageTop';
import DirectorsList from './DirectorsList/DirectorsList';
import SearchDirector from './SearchDirector/SearchDirector';
import { directorsData } from '../../assets/data';
import { languagesData } from '../../assets/languagesData';

import './directors.scss';

const styles = theme => ({
  title: {
    width: '250px',
    margin: '0 auto',
    padding: 0
  }
});
class Directors extends Component {
  state = {
    directors: directorsData,
    filteredDirectors: directorsData,
    page: 0,
    rowsPerPage: 5
  }

  handleSearch = search => {
    const filteredDirectors = this.state.artists.filter(director => director.name.toLowerCase().includes(search.toLowerCase()))
    this.setState({ filteredDirectors });
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const {
      filteredDirectors,
      page,
      rowsPerPage
    } = this.state;

    const {
      classes,
      language
    } = this.props;

    const directorsResult = filteredDirectors.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
    const title = languagesData[language]['BROWSE_DIRECTORS'];
    const placeholder = languagesData[language]['SEARCH_THEATER_DIRECTORS'];

    return (
      <div>
        <PageTop
          title={title}
        />
        <div className="artists-container">
          <SearchDirector
            placeholder={placeholder}
            handleSearch={this.handleSearch}
          />
          <DirectorsList
            directors={directorsResult}
          />
        </div>
        <div className="pagination-container">
          <TablePagination
            className={classes.title}
            rowsPerPageOptions={[5, 10]}
            rowsPerPage={rowsPerPage}
            component="div"
            count={filteredDirectors.length}
            page={page}
            backIconButtonProps={{
              'aria-label': 'Previous Page',
            }}
            nextIconButtonProps={{
              'aria-label': 'Next Page',
            }}
            onChangePage={this.handleChangePage}
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Directors);