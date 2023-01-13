import React, { useState } from 'react';
import { Canvas } from 'react-three-fiber';
import { Lights, Particles, AboutMesh, Plane, Box, SolarSystem } from '../';
import Controls from './Controls';
import { Effects } from '@react-three/drei';
import { Physics } from '@react-three/cannon';
// import { EffectComposer, Bloom } from '@react-three/postprocessing';

export default function Scene({
  isFocus,
  setFocus,
  onMobile,
  textures,
  wasFocus,
}) {
  const [active, setActive] = useState(true);

  return (
    <Canvas
      colorManagement
      gl={{ alpha: false }}
      camera={{ position: [150, 150, 5], fov: 18 }}
    >
      <Controls
        isFocus={isFocus === '' ? 'home' : isFocus}
        setFocus={setFocus}
        setActive={setActive}
        onMobile={onMobile}
        active={active}
      />
      <Lights isFocus={isFocus} />

      {isFocus == 'home' || wasFocus == 'home' ? (
        <Particles setActive={setActive} active={active} count={250} />
      ) : (
        <></>
      )}

      {isFocus == 'about' || wasFocus == 'about' ? (
        <AboutMesh position={[100, 100, 100]} scale={[0.5, 0.5, 0.5]} />
      ) : (
        <></>
      )}

      {isFocus == 'bonus' || wasFocus == 'bonus' ? (
        <SolarSystem textures={textures} isFocus={isFocus} />
      ) : (
        <></>
      )}

      {isFocus == 'work' || wasFocus == 'work' ? (
        <Physics gravity={[0, 0, -1]}>
          <Plane isFocus={isFocus} position={[-200, -205, -200]} />
          <Box number={1000} />
        </Physics>
      ) : (
        <></>
      )}

      <Effects>
        <unrealBloomPass attachArray="passes" args={[1, 1, 0, 0]} />
      </Effects>
    </Canvas>
  );
}
