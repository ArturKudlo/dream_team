import React, { Fragment } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Link, withRouter } from 'react-router-dom';

import './directors-item.scss';

const DirectorItem = props => {
  const { item } = props;
  return (
    <Link to={`/directors/${item.id}`} className="common-link">
      <div className="directors-item">
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Avatar" src={item.photos[0]} />
          </ListItemAvatar>
          <ListItemText
            primary={item.name}
            secondary={
              <Fragment>
                <Typography component="span" color="textPrimary">
                  {item.city}
                </Typography>
              </Fragment>
            }
          />
        </ListItem>
      </div>
    </Link>
  );
}

export default withRouter(DirectorItem);