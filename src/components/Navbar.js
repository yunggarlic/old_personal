import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade, Button } from '@material-ui/core';
import useStyles from '../styles/material-styles';

export default function Navbar({ isFocus, setFocus }) {
  const { navbar, navButton, navButtonDisabled } = useStyles();
  const [loaded, setLoaded] = useState(false);

  const applyFocus = (e) => {
    const focus = e.target.innerHTML;
    setFocus(focus);
  };

  useEffect(() => {
    setTimeout(() => {
      setFocus('home');
      setLoaded(true);
    }, 2000);

    return () => {
      setLoaded(false);
    };
  }, []);

  return (
    <Fade in={loaded} timeout={2000}>
      <Box className={navbar}>
        <Button
          color="secondary"
          onClick={applyFocus}
          id="home"
          disabled={isFocus === 'home'}
        >{`home`}</Button>
        <Button
          onClick={applyFocus}
          color="secondary"
          id="about"
          disabled={isFocus === 'about'}
        >{`about`}</Button>
        <Button
          onClick={applyFocus}
          color="secondary"
          id="work"
          disabled={isFocus === 'work'}
        >{`work`}</Button>
        <Button
          onClick={applyFocus}
          color="secondary"
          id="bonus"
          disabled={isFocus === 'bonus'}
        >{`bonus`}</Button>
      </Box>
    </Fade>
  );
}
