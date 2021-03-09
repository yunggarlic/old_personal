import React, { useRef, useState, useEffect } from 'react';
import { Canvas, extend } from 'react-three-fiber';
import { Lights, Particles } from '../';
import Controls from './Controls';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';
import { Effects } from '@react-three/drei';
// import { Physics } from '@react-three/cannon';

extend({
  UnrealBloomPass,
});

export default function Scene({ isFocus, setFocus }) {
  const toggleZoom = () => setFocus((active) => !active);

  return (
    <Canvas
      shadowMap
      colorManagement
      gl={{ alpha: false }}
      camera={{ position: [-1, -70, -10], fov: 50 }}
      onClick={toggleZoom}
    >
      <Lights />
      <Particles count={500} />
      <Controls isFocus={isFocus} />
      {/* <Physics gravity={[0, -2, 0]}>
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]} />
        <Plane rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} />
        <Box number={200} />
      </Physics> */}
      <Effects>
        <unrealBloomPass attachArray="passes" args={[0.1, 1, 0, 0]} />
      </Effects>
    </Canvas>
  );
}
