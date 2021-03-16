import React from 'react';
import { useStyles } from '../styles/material-styles';
import { Box, Fade, Typography } from '@material-ui/core';

export default function Home(props) {
  const { isFocus, onMobile } = props;
  const { homeContainer } = useStyles();
  return (
    <Fade
      in={isFocus === 'home'}
      timeout={{ enter: 3500, exit: 1000 }}
      unmountOnExit
    >
      <Box className={homeContainer}>
        <Typography variant="h1" color="primary">
          Hello.
        </Typography>
        {onMobile ? (
          <Typography variant="body1" color="error">
            Will probably crash on ur phone lol
            <br />
            But you can click thru the info anyway
          </Typography>
        ) : (
          <></>
        )}
      </Box>
    </Fade>
  );
}
