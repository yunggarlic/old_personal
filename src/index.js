import React, { useState, useEffect } from 'react';
import { Scene, Navbar, Navbox, Content, Home } from './components';
import { Box, Container } from '@material-ui/core';
import { useStyles } from './styles/material-styles';
// import { Stats } from '@react-three/drei';

export default function Main() {
  const { main, scene } = useStyles();
  const [isFocus, setFocus] = useState('home');
  const [onMobile, setMobile] = useState(false);

  useEffect(() => {
    window.screen.width / window.screen.height < 1.3
      ? setMobile(true)
      : setMobile(false);
    console.log(window.screen.width / window.screen.height);
  });

  return (
    <Box className={main}>
      <Navbar
        id="nav"
        isFocus={isFocus}
        setFocus={setFocus}
        onMobile={onMobile}
      />
      <Content isFocus={isFocus} onMobile={onMobile} />
      <Box className={scene}>
        <Scene
          id="scene"
          onMobile={onMobile}
          isFocus={isFocus}
          setFocus={setFocus}
        />
      </Box>
      {/* <Stats /> */}
    </Box>
  );
}
