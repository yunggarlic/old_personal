import React, { useState } from 'react';
import { Scene, Navbar, Navbox } from './components';
import { Box, Container } from '@material-ui/core';
import useStyles from './styles/material-styles';
//hello

export default function Home() {
  const { main, content } = useStyles();
  const [isFocus, setFocus] = useState(false);
  return (
    <Box className={main}>
      <Container maxWidth="sm" className={content}>
        <Navbar id="nav" />
        {/* <Navbox /> */}
      </Container>
      <Scene id="scene" isFocus={isFocus} setFocus={setFocus} />
    </Box>
  );
}
