import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import faExclamationCircle from '@fortawesome/fontawesome-free-solid/faExclamationCircle';

import './not_found.scss';

const PageNotFound = () => {
  return (
    <div className="container">
      <div className="not_found_container">
        <div className="not_found_icon">
          <FontAwesomeIcon icon={faExclamationCircle} />
        </div>
        <div className="not_found_desc">
          Oops !! page not found
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;