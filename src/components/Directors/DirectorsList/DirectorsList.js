import React from 'react';

import DirectorItem from '../DirectorItem/DirectorItem';
import NoResult from '../NoResult/NoResult';

import './directors-list.scss';

const DirectorsList = props => {
  const { directors } = props;
  return (
    <div className="directors-list">
      {directors.length ? props.directors.map(item => (
        <DirectorItem
          key={item.id}
          item={item}
        />
      ))
        : (
          <NoResult
            text='No result'
          />
        )}
    </div>
  );
}

export default DirectorsList;