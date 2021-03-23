import React, { useState, useEffect } from 'react';
import { Box, Typography, Fade, Button } from '@material-ui/core';
import { useStyles } from '../styles/material-styles';

export default function Navbar({ isFocus, setFocus }) {
  const { navbar, navButtons, selectedNavButtons } = useStyles();
  const [loaded, setLoaded] = useState(false);

  const applyFocus = (e) => {
    const focus = e.target.innerText.toLowerCase();
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
          className={navButtons}
          variant="outlined"
          color="secondary"
          onClick={applyFocus}
          id="home"
        >{`home`}</Button>
        <Button
          className={navButtons}
          variant="outlined"
          onClick={applyFocus}
          color="secondary"
          id="about"
        >{`about`}</Button>
        <Button
          className={navButtons}
          variant="outlined"
          onClick={applyFocus}
          color="secondary"
          id="work"
        >{`work`}</Button>
        <Button
          className={navButtons}
          variant="outlined"
          onClick={applyFocus}
          color="secondary"
          id="bonus"
        >{`bonus`}</Button>
      </Box>
    </Fade>
  );
}
