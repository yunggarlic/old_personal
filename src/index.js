import React, { useState, useEffect } from 'react';
import { Scene, Navbar, Content, Cursor } from './components';
import './styles/index.less';
import { useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

// import { Stats } from '@react-three/drei';

export default function Main() {
  const [isFocus, setFocus] = useState('');
  const [onMobile, setMobile] = useState(false);
  const [isFirstTime, setFirstTime] = useState(true);
  console.log('main')

  useEffect(() => {
    window.screen.width / window.screen.height < 1.3
      ? setMobile(true)
      : setMobile(false);
  })

  const textures = useLoader(TextureLoader, ['./textures/sunmap.jpeg',
  './textures/mercurymap.jpeg',
  './textures/venusmap.jpeg',
  './textures/earthmap1k.jpeg',
  './textures/5672_mars_2k_color.jpeg',
  './textures/jupiter2_2k.jpeg',
])

  return (
    <div id="main">
      <Navbar
        id="nav"
        isFocus={isFocus}
        setFocus={setFocus}
        setFirstTime={setFirstTime}
        onMobile={onMobile}
      />
      <Content isFocus={isFocus} onMobile={onMobile} isFirstTime={isFirstTime}/>
      <div className="scene">
        <Scene
          id="scene"
          onMobile={onMobile}
          isFocus={isFocus}
          setFocus={setFocus}
          textures={textures}
        />
      </div>
      <Cursor />
      {/* <Stats /> */}
    </div>
  );
}
