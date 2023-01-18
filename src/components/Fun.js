import React, { useState, useEffect } from 'react';
import { Scene, Navbar, Content, Cursor } from './';
import '../styles/index.less';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

const Fun = () => {
  const [isFocus, setFocus] = useState('');
  const [wasFocus, setWasFocus] = useState('');
  const [onMobile, setMobile] = useState(false);
  const [isFirstTime, setFirstTime] = useState(true);

  useEffect(() => {
    window.screen.width / window.screen.height < 1.3
      ? setMobile(true)
      : setMobile(false);
  });

  const textures = useLoader(TextureLoader, [
    './textures/sunmap.jpeg',
    './textures/mercurymap.jpeg',
    './textures/venusmap.jpeg',
    './textures/earthmap1k.jpeg',
    './textures/5672_mars_2k_color.jpeg',
    './textures/jupiter2_2k.jpeg',
  ]);
  return (
    <div id="main">
      <Navbar
        id="nav"
        isFocus={isFocus}
        setFocus={setFocus}
        setFirstTime={setFirstTime}
        setWasFocus={setWasFocus}
        onMobile={onMobile}
      />
      <Content
        isFocus={isFocus}
        onMobile={onMobile}
        isFirstTime={isFirstTime}
      />
      <div className="scene">
        <Scene
          id="scene"
          onMobile={onMobile}
          isFocus={isFocus}
          setFocus={setFocus}
          textures={textures}
          wasFocus={wasFocus}
        />
      </div>
      <Cursor />
      {/* <Stats /> */}
    </div>
  );
};

export default Fun;
