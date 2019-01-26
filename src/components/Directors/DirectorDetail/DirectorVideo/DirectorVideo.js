import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ModalVideo from 'react-modal-video';

import { languagesData } from '../../../../assets/languagesData';
import Title from '../../../shared/Title/Title';

import 'react-modal-video/scss/modal-video.scss';
import './director-video.scss';

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
      videoId,
      language
    } = this.props;

    return (
      <div className="video-wrapper">
        <Title 
          text={languagesData[language]['VIDEO']}
        />
        <ModalVideo
          channel="youtube"
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
          {languagesData[language]['WATCH_VIDEO']}
        </Button>
      </div>
    )
  }
}

export default withStyles(styles)(DirectorVideo);