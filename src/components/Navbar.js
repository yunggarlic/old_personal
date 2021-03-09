import React, { useState, useEffect } from 'react';
import { Container, Typography, Fade, Button } from '@material-ui/core';
import useStyles from '../styles/material-styles';

export default function Navbar() {
  const { navbar, nav, middlenav } = useStyles();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);

    return () => {
      setLoaded(false);
    };
  }, []);

  return (
    <Container className={nav}>
      <Button color="secondary" id="about">{`< about`}</Button>
      <Container className={middlenav}>
        <Button color="secondary" id="home">{`^ home`}</Button>
        <Fade in={loaded} timeout={500} unmountOnExit>
          <Container className={navbar}>
            <Typography variant="h1" color="primary">
              Hello
            </Typography>
          </Container>
        </Fade>
        <Button color="secondary" id="work">{`v work`}</Button>
      </Container>
      <Button color="secondary" id="bonus">{`> bonus`}</Button>
    </Container>
  );
}
