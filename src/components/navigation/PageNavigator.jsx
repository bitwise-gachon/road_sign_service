import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// eslint-disable-next-line object-curly-newline
import { List, ListItemButton, ListItemIcon, Typography } from '@mui/material';

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
      {urlContents.map(({ url, title, icon }) => {
        if (url === window.location.pathname.toString()) {
          return (
            <ListItemButton
              key={title}
              onClick={() => navigate(url)}
              sx={{
                padding: 2,
              }}
              selected
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <Typography>{title}</Typography>
            </ListItemButton>
          );
        }
        return (
          <ListItemButton
            key={title}
            onClick={() => navigate(url)}
            sx={{
              padding: 2,
            }}
          >
            <ListItemIcon>{icon}</ListItemIcon>
            <Typography>{title}</Typography>
          </ListItemButton>
        );
      })}
    </List>
  );
}
PageNavigator.propTypes = {
  urlContents: PropTypes.arrayOf(
    PropTypes.shape({ url: PropTypes.string, title: PropTypes.string }),
  ).isRequired,
};

export default PageNavigator;
