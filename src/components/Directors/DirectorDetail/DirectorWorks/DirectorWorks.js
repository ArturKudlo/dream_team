import React from 'react';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Title from '../../../shared/Title/Title';

import './director-works.scss';

const DirectorWorks = ({ works }) => {
  const renderWorks = works => Object.entries(works).map((work, index) => (
    <ListItem key={index}>
      <div className="date">
      {work[0]}
      </div>
      <ListItemText
        primary={work[1]}
      />
    </ListItem>
  ))

  return (
    <div className="works-wrapper">
      <Title
        text="Works"
      />
      <Grid item xs={12} md={6}>
        <div className="works-list-title">
          <List>
            {renderWorks(works)}
          </List >
        </div>
      </Grid>
    </div >
  )
}

export default DirectorWorks;