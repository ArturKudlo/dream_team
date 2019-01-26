import React from 'react';
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';

import { languagesData } from '../../../../assets/languagesData';
import Title from '../../../shared/Title/Title';

import './director-biography.scss';

const DirectorBiography = ({ language, biography }) => {
  const renderDates = biography => Object.entries(biography).map((item, index) => (
    <TimelineItem
      key={index}
      dateText={item[0]}
      dateInnerStyle={{ background: '#76bb7f' }}
    >
      <h4>{item[1]}</h4>
    </TimelineItem>
  ))

  return (
    <div className="biography-wrapper">
      <Title
        text={languagesData[language]['BIOGRAPHY']}
      />
      <Timeline lineColor={'#ddd'}>
        {renderDates(biography)}
      </Timeline>
    </div>
  )
}

export default DirectorBiography;