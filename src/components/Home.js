import React from 'react';
import { useStyles } from '../styles/material-styles';
import { Box, Fade, Typography } from '@material-ui/core';

export default function Home(props) {
  const { isFocus } = props;
  const { homeContainer } = useStyles();
  return (
    <Fade
      in={isFocus === 'home'}
      timeout={{ enter: 3500, exit: 1000 }}
      unmountOnExit
    >
      <Typography variant="h1" className={homeContainer} color="primary">
        Hello.
      </Typography>
    </Fade>
  );
}
