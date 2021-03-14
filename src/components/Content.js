import React from 'react';
import useStyles from '../styles/material-styles';
import { Box, Typography, Fade } from '@material-ui/core';
import { About, Home, Work } from './index';

export default function Content(props) {
  const { isFocus } = props;
  const classes = useStyles();
  return (
    <Box className={classes.content}>
      <Home isFocus={isFocus} />
      <About isFocus={isFocus} />
      <Work isFocus={isFocus} />
    </Box>
  );
}
