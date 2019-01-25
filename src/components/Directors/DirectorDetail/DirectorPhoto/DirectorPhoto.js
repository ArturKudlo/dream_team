import React, { Component } from 'react';

import ImageLightBox from '../../../shared/Lightbox';

import './director-photo.scss';

class DirectorPhoto extends Component {
  state = {
    lightbox: false,
    photoPos: 0
  }

  handleLightBox = pos => {
    this.setState({
      lightbox: true,
      photoPos: pos
    })
  }

  handleLightBoxClose = () => {
    this.setState({
      lightbox: false
    })
  }


  showThumbs = () => (
    this.props.photos.map((item, i) => (
      i > 0 ?
        <div
          key={i}
          onClick={() => this.handleLightBox(i)}
          className="thumb"
          style={{ background: `url(${item}) no-repeat` }}
        ></div>
        : null
    ))
  )

  render() {
    const { photos } = this.props;
    const { open, photoPos } = this.state;

    return (
      <div className="product_image_container">
        <div className="main_pic">
          <div
            style={{ background: `url(${photos[0]}) no-repeat` }}
            onClick={() => this.handleLightBox(0)}
          >
          </div>
        </div>
        <div className="main_thumbs">
          {this.showThumbs()}
        </div>
        {
          this.state.lightbox ?
            <ImageLightBox
              id='light-box'
              images={photos}
              open={open}
              pos={photoPos}
              onclose={() => this.handleLightBoxClose()}
            />
            : null
        }
      </div>
    );
  }
}

export default DirectorPhoto;