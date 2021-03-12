import React, { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { SpotLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

export default function WorkLight({ planeRef }) {
  const mesh = useRef();
  const spotLight = useRef();

  useEffect(() => {
    console.log(planeRef);
  });

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
  });

  // useHelper(spotLight, SpotLightHelper, 'red');

  return (
    <>
      <mesh ref={mesh} position={[-200, -180, -150]}>
        <sphereGeometry args={[0.1, 0.1, 0.1]} />
        <meshBasicMaterial />
        <spotLight ref={spotLight} target={planeRef.current} />
      </mesh>
    </>
  );
}
