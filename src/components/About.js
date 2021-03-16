import React from 'react';
import { useStyles, useMobileStyles } from '../styles/material-styles';
import { Box, Typography, Fade, Button } from '@material-ui/core';
import { LinkedIn } from '@material-ui/icons';

export default function About(props) {
  const { isFocus, onMobile } = props;
  const { aboutContainer, aboutContent } = onMobile
    ? useMobileStyles()
    : useStyles();
  return (
    <Fade
      in={isFocus === 'about'}
      timeout={{ enter: 3500, exit: 1000 }}
      unmountOnExit
    >
      <Box className={aboutContainer}>
        <Typography
          className={aboutContent}
          variant="h3"
          component="h1"
          color="primary"
        >
          I am Tim Ferrari
        </Typography>
        <Typography
          className={aboutContent}
          color="primary"
          variant="subtitle2"
          component="h2"
        >
          a Chicago based software engineer, artist, and podcaster.
        </Typography>
        <Typography
          className={aboutContent}
          variant="body2"
          component="p"
          color="secondary"
        >
          <br /> Host and producer of the Statesmen podcast. <br />
          <br /> Former freelance video director, turned software engineer
          <br />
          <br /> Catch me painting, working on my moped, or playing video games.
        </Typography>
        <br />
        <br />
        <Button
          component="a"
          startIcon={<LinkedIn />}
          variant="contained"
          color="secondary"
          href="http://www.linkedin.com/in/timferrari"
        >
          Linkedin
        </Button>
      </Box>
    </Fade>
  );
}
