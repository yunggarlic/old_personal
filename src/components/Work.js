import React from 'react';
import { useStyles, useMobileStyles } from '../styles/material-styles';
import { Box, Button, Link, Typography, Fade } from '@material-ui/core';
import { GitHub } from '@material-ui/icons';

export default function Work(props) {
  const { isFocus, onMobile } = props;
  const { aboutContent, workContainer } = onMobile
    ? useMobileStyles()
    : useStyles();
  return (
    <Fade
      in={isFocus === 'work'}
      timeout={{ enter: 3500, exit: 1000 }}
      unmountOnExit
    >
      <Box className={workContainer}>
        <Typography
          align="right"
          variant="h3"
          component="h1"
          className={aboutContent}
          color="primary"
        >
          selected works
        </Typography>
        <br />
        <Typography
          align="right"
          variant="body1"
          component="h2"
          color="primary"
        >
          welcome to the arena - a c++ roguelite
        </Typography>
        <Link href="https://github.com/yunggarlic/arena">
          <Typography
            variant="body2"
            align="right"
            component="p"
            color="secondary"
          >
            https://github.com/yunggarlic/arena
          </Typography>
        </Link>
        <br />
        <Typography
          align="right"
          variant="body1"
          component="h2"
          color="primary"
        >
          statesmen - a podcast website
        </Typography>
        <Link href="http://statesmenpodcast.com">
          <Typography
            variant="body2"
            align="right"
            component="p"
            color="secondary"
          >
            statesmenpodcast.com
          </Typography>
        </Link>
        <br />
        <Typography
          align="right"
          variant="body1"
          component="h2"
          color="primary"
        >
          aether - a multiplayer 3D loop synth
        </Typography>
        <Link href="http://aether-leo.herokuapp.com">
          <Typography variant="body2" component="p" color="secondary">
            aether-leo.herokuapp.com
          </Typography>
        </Link>
        <br />
        <Typography
          align="right"
          variant="body1"
          component="h2"
          color="primary"
        >
          space place - an ecommerce site
        </Typography>
        <Link href="http://graceshopper-epsilon.herokuapp.com">
          <Typography variant="body2" component="p" color="secondary">
            graceshopper-epsilon.herokuapp.com
          </Typography>
        </Link>
        <br /> <br />
        <Button
          component="a"
          startIcon={<GitHub />}
          variant="contained"
          color="secondary"
          href="http://www.github.com/yunggarlic"
        >
          Github
        </Button>
      </Box>
    </Fade>
  );
}
