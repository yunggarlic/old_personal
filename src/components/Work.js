import React from 'react';
import useStyles from '../styles/material-styles';
import { Box, Button, Link, Typography, Fade } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

export default function Work(props) {
  const { isFocus } = props;
  const { aboutContent, workContainer, buttonBox } = useStyles();
  return (
    <Fade in={isFocus === 'work'} timeout={1000} unmountOnExit>
      <Box className={workContainer}>
        <Typography
          align="right"
          variant="h3"
          component="h1"
          className={aboutContent}
          color="primary"
        >
          Here's my shit
        </Typography>

        <Button
          component="a"
          startIcon={<GitHub />}
          variant="contained"
          color="secondary"
          href="www.github.com/yunggarlic"
        >
          Github
        </Button>
      </Box>
    </Fade>
  );
}
