import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
// import { SpotLightHelper } from 'three';
// import { useHelper } from '@react-three/drei';

export default function Lights() {
  const spotLight = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    //with y position, light swings circular
    //without, like a pendulum
    spotLight.current.position.x = 10 * Math.sin(t) + 1;
    // spotLight.current.position.y = 10 * Math.cos(t) + 1;
  });

  // useHelper(spotLight, SpotLightHelper, 'red');

  return (
    <>
      <spotLight
        ref={spotLight}
        position={[0, 10, 0]}
        angle={0.8}
        penumbra={1}
        intensity={0.05}
        castShadow
        shadow-mapSize-width={512}
        shadow-mapSize-height={512}
      ></spotLight>
    </>
  );
}
