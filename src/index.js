import React, { useState } from 'react';
import { Scene, Navbar, Navbox } from './components';
import { Box, Container } from '@material-ui/core';
import useStyles from './styles/material-styles';
import { Stats } from '@react-three/drei';

export default function Home() {
  const { main, content } = useStyles();
  const [isFocus, setFocus] = useState('');
  return (
    <Box className={main}>
      <Container maxWidth="sm" className={content}>
        <Navbar id="nav" isFocus={isFocus} setFocus={setFocus} />
        {/* <Navbox /> */}
      </Container>
      <Scene id="scene" isFocus={isFocus} setFocus={setFocus} />
      <Stats />
    </Box>
  );
}
