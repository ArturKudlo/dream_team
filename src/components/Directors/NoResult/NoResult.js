import React from 'react';

import './no-result.scss';

const NoResult = props => {
  return (
    <div className="no-result">
      {props.text}
    </div>
  );
}

export default NoResult;