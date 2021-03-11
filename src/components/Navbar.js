import React, { useState, useEffect } from 'react';
import { Container, Typography, Fade, Button } from '@material-ui/core';
import useStyles from '../styles/material-styles';

export default function Navbar({ isFocus, setFocus }) {
  const { navbar, nav, middlenav } = useStyles();
  const [loaded, setLoaded] = useState(false);

  const applyFocus = (e) => {
    const focus = e.target.innerHTML.split(' ')[1];
    setFocus(focus);
  };

  useEffect(() => {
    setFocus('home');
    setLoaded(true);

    setTimeout(() => {}, 500);

    return () => {
      setLoaded(false);
    };
  }, []);

  return (
    <Container className={nav}>
      {/* {isFocus === 'about' ? (
        <></>
      ) : ( */}
      <Fade in={isFocus !== 'about'} timeout={1000}>
        <Button
          onClick={applyFocus}
          color="secondary"
          id="about"
        >{`< about`}</Button>
      </Fade>
      {/* )} */}
      <Container className={middlenav}>
        <Fade in={isFocus !== 'home'} timeout={1000}>
          <Button
            color="secondary"
            onClick={applyFocus}
            id="home"
          >{`^ home`}</Button>
        </Fade>
        <Fade in={loaded} timeout={1000} unmountOnExit>
          <Container className={navbar}>
            <Typography variant="h1" color="primary">
              Hello
            </Typography>
          </Container>
        </Fade>
        <Fade in={isFocus !== 'work'} timeout={1000}>
          <Button
            onClick={applyFocus}
            color="secondary"
            id="work"
          >{`v work`}</Button>
        </Fade>
      </Container>
      <Fade in={isFocus !== 'bonus'} timeout={1000}>
        <Button
          onClick={applyFocus}
          color="secondary"
          id="bonus"
        >{`> bonus`}</Button>
      </Fade>
    </Container>
  );
}
