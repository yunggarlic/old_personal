import React from 'react';
import useStyles from '../styles/material-styles';
import { Box, Typography, Fade } from '@material-ui/core';

export default function About(props) {
  const { isFocus } = props;
  const { aboutContainer, aboutContent } = useStyles();
  return (
    <Fade in={isFocus === 'about'} timeout={1000} unmountOnExit>
      <Box className={aboutContainer}>
        <Typography
          className={aboutContent}
          align="right"
          variant="h3"
          component="h1"
          color="primary"
        >
          I am Tim Ferrari, a Chicago based software engineer, artist, and
          podcaster.
        </Typography>
        <Typography
          align="right"
          className={aboutContent}
          variant="h5"
          component="h2"
          color="secondary"
        >
          <br /> Host and producer of the Statesmen podcast. <br />
          <br /> Former freelance video director, turned web graphic animator
          <br />
          <br /> Catch me painting, working on my moped, or playing video games.
        </Typography>
      </Box>
    </Fade>
  );
}
