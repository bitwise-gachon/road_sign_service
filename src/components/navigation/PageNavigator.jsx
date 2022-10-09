import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItemButton, ListItemIcon } from '@mui/material';

function PageNavigator({ urlContents }) {
  const navigate = useNavigate();
  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
      }}
    >
      {urlContents.map(({ url, title, icon }) => (
        <ListItemButton
          key={title}
          onClick={() => navigate(url)}
          sx={{
            padding: 2,
          }}
        >
          <ListItemIcon>{icon}</ListItemIcon>
          {title}
        </ListItemButton>
      ))}
    </List>
  );
}
PageNavigator.propTypes = {
  urlContents: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string, title: PropTypes.string }),
  ).isRequired,
};

export default PageNavigator;
