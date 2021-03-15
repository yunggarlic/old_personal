import React, { useState, useRef } from 'react';
import { Canvas, extend } from 'react-three-fiber';
import { Lights, Particles, AboutMesh, Plane, Box, WorkLight } from '../';
import Controls from './Controls';
import { Effects } from '@react-three/drei';
import { Physics } from '@react-three/cannon';

export default function Scene({ isFocus, setFocus }) {
  const [active, setActive] = useState(true);

  return (
    <Canvas
      colorManagement
      gl={{ alpha: false }}
      camera={{ position: [150, 150, 5], fov: 18 }}
    >
      <Controls
        isFocus={isFocus}
        setFocus={setFocus}
        setActive={setActive}
        active={active}
      />
      <Lights isFocus={isFocus} />

      <Particles setActive={setActive} active={active} count={250} />
      <AboutMesh position={[100, 100, 100]} scale={[0.5, 0.5, 0.5]} />

      <Physics gravity={[0, 0, -10]}>
        <Plane isFocus={isFocus} position={[-200, -205, -200]} />
        <Box number={250} />
      </Physics>
      <Effects>
        <unrealBloomPass attachArray="passes" args={[1, 1, 0, 0]} />
      </Effects>
    </Canvas>
  );
}
