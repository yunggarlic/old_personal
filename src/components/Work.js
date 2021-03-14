import React from 'react';
import useStyles from '../styles/material-styles';
import { Box, Typography, Fade } from '@material-ui/core';

export default function Work(props) {
  const { isFocus } = props;
  const { contentContainer, text } = useStyles();
  return (
    <Fade in={isFocus === 'work'} timeout={1000} unmountOnExit>
      <Typography color="primary">I've done stuff.</Typography>
    </Fade>
  );
}
