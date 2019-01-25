import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
    width: '300px'
  }
});

class DirectorVideo extends Component {
  state = {
    isOpen: false
  }

  toggleModal = state => {
    this.setState({ isOpen: state })
  }

  render() {
    const {
      classes,
      videoId
    } = this.props;

    return (
      <div>
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId={videoId}
          onClose={this.toggleModal.bind(null, false)}
        />
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.toggleModal.bind(null, true)}
        >
          Watch video
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(DirectorVideo);
