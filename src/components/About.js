import React from 'react';
import useStyles from '../styles/material-styles';
import { Container, Typography, Fade } from '@material-ui/core';

export default function About(props) {
  const { isFocus } = props;
  const { aboutContainer, aboutText } = useStyles();
  return (
    <Fade in={isFocus === 'about'} timeout={1000} unmountOnExit>
      <Typography
        align="right"
        variant="h5"
        className={aboutContainer}
        color="primary"
      >
        I am Tim Ferrari, a Chicago based software engineer, artist, and
        podcaster.
        <br />
        <br /> Host and producer of the Statesmen podcast. <br />
        <br /> Former freelance video director, turned web graphic animator
        <br />
        <br /> Catch me painting, working on my moped, or playing video games.
      </Typography>
    </Fade>
  );
}
