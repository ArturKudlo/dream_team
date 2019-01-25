import React, { Component } from 'react';

import DirectorPhoto from './DirectorPhoto/DirectorPhoto';
import DirectorBiography from './DirectorBiography/DirectorBiography';
import DirectorVideo from './DirectorVideo/DirectorVideo';
import DirectorLocation from './DirectorLocation/DirectorLocation';
import NoResult from '../NoResult/NoResult';
import { directorsData } from '../../../assets/data';

import './director-detail.scss';

class DirectorDetail extends Component {
  state = {}

  render() {
    const id = Number(this.props.match.params.id);
    const director = directorsData.find(director => director.id === id);
    if (!director) return <NoResult />;

    return (
      <div>
          <div className="director_detail_wrapper">
            <div className="left">
              <div style={{ width: '500px' }}>
                <DirectorPhoto
                  photos={director.photos}
                />
              </div>
            </div>
            <div className="right">
              <DirectorVideo
                videoId={director.video}
              />
              <DirectorBiography />
              <DirectorLocation
                location={director.location}
              />
            </div>
          </div>
      </div>
    );
  }
}

export default DirectorDetail;