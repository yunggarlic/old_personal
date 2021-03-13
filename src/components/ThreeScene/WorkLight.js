import React, { useEffect, useRef } from 'react';
import { useFrame, extend } from 'react-three-fiber';
import { SpotLightHelper } from 'three';
import { useHelper } from '@react-three/drei';
import { EffectComposer, GodRays } from '@react-three/postprocessing';
// import {
//   EffectComposer,
//   BlendFunction,
//   Resizer,
//   KernelSize,
// } from 'postprocessing';

export default function WorkLight({ planeRef }) {
  const mesh = useRef();
  const spotLight = useRef();

  useEffect(() => {
    console.log(planeRef);
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
  });
  // if (spotLight) useHelper(spotLight, SpotLightHelper, 'red');

  return (
    <>
      <mesh ref={mesh} position={[-200, -200, -150]}>
        <sphereGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial />
        <spotLight ref={spotLight} target={planeRef.current} />
      </mesh>
    </>
  );
}
