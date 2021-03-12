import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { SpotLightHelper } from 'three';
import { useHelper } from '@react-three/drei';

export default function Lights() {
  const spotLight = useRef();
  const pointLight = useRef();
  const pointLight2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    //with y position, light swings circular
    //without, like a pendulum
    spotLight.current.position.x = Math.sin(t) + 1;

    // pointLight.current.position.z = 20 * Math.sin(t) + 100;
    // pointLight.current.position.y = 10 * Math.cos(t) + 110;

    // pointLight2.current.position.z = -20 * Math.sin(t) + 100;
    // pointLight2.current.position.y = 10 * Math.cos(t) + 90;
  });

  // useHelper(spotLight, SpotLightHelper, 'red');

  return (
    <>
      <spotLight
        ref={spotLight}
        position={[0, 20, 0]}
        angle={0.7}
        penumbra={0.5}
        intensity={0.05}
        // shadow-mapSize-width={512}
        // shadow-mapSize-height={512}
      ></spotLight>
    </>
  );
}
