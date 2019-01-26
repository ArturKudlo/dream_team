import React from 'react';

import Title from '../../../shared/Title/Title';

import './director-location.scss';

const DirectorLocation = ({ location }) => {

  return (
    <div className="location-wrapper">
      <Title
        text="Location"
      />
      <iframe
        className="iframe"
        title="location"
        src={location}
        frameBorder="0"
        allowFullScreen
      />

      <div className="location-tag">
        <div>Location</div>
      </div>

    </div>
  )
}

export default DirectorLocation;