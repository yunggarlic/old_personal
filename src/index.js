import React, { useState, useEffect } from 'react';
import { Scene, Navbar, Navbox, Content, Home } from './components';
import './styles/index.less';

// import { Stats } from '@react-three/drei';

export default function Main() {
  const [isFocus, setFocus] = useState('');
  const [onMobile, setMobile] = useState(false);

  useEffect(() => {
    window.screen.width / window.screen.height < 1.3
      ? setMobile(true)
      : setMobile(false);
  });

  return (
    <div id="main">
      <Navbar
        id="nav"
        isFocus={isFocus}
        setFocus={setFocus}
        onMobile={onMobile}
      />
      <Content isFocus={isFocus} onMobile={onMobile} />
      <div className="scene">
        <Scene
          id="scene"
          onMobile={onMobile}
          isFocus={isFocus}
          setFocus={setFocus}
        />
      </div>
      {/* <Stats /> */}
    </div>
  );
}
