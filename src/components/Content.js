import React from 'react';
import { useStyles, useMobileStyles } from '../styles/material-styles';
import { Box, Typography, Fade } from '@material-ui/core';
import { About, Home, Work } from './index';

export default function Content(props) {
  const { isFocus, onMobile } = props;
  const classes = onMobile ? useMobileStyles() : useStyles();
  return (
    <Box className={classes.content}>
      <Home isFocus={isFocus} onMobile={onMobile} />
      <About isFocus={isFocus} onMobile={onMobile} />
      <Work isFocus={isFocus} onMobile={onMobile} />
    </Box>
  );
}
