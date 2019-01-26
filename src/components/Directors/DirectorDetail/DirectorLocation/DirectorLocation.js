import React from 'react';

import { languagesData } from '../../../../assets/languagesData';
import Title from '../../../shared/Title/Title';

import './director-location.scss';

const DirectorLocation = ({ language, location }) => {
  const locationText = languagesData[language]['LOCATION'];

  return (
    <div className="location-wrapper">
      <Title
        text={locationText}
      />
      <iframe
        className="iframe"
        title="location"
        src={location}
        frameBorder="0"
        allowFullScreen
      />

      <div className="location-tag">
        <div>{locationText}</div>
      </div>

    </div>
  )
}

export default DirectorLocation;