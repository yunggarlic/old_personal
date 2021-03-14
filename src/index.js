import React, { useState } from 'react';
import { Scene, Navbar, Navbox, Content, Home } from './components';
import { Box, Container } from '@material-ui/core';
import useStyles from './styles/material-styles';
// import { Stats } from '@react-three/drei';

export default function Main() {
  const { main, scene } = useStyles();
  const [isFocus, setFocus] = useState('home');
  return (
    <Box className={main}>
      <Navbar id="nav" isFocus={isFocus} setFocus={setFocus} />
      <Content isFocus={isFocus} />
      <Box className={scene}>
        <Scene id="scene" isFocus={isFocus} setFocus={setFocus} />
      </Box>
      {/* <Stats /> */}
    </Box>
  );
}
