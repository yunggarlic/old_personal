import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring, animated } from 'react-spring/three';
// import { SpotLightHelper } from 'three';
// import { useHelper } from '@react-three/drei';

export default function Lights({ isFocus }) {
  const spotLight = useRef();
  const [toggle, setToggle] = useState(false);
  const { intensity: value } = useSpring({
    intensity: toggle ? 0.05 : 0,
    config: { mass: 15, tension: 15, friction: 50 },
  });

  useFrame(({ clock }) => {
    isFocus === 'home' ? setToggle(true) : setToggle(false);
  });

  return (
    <>
      <animated.spotLight
        ref={spotLight}
        position={[0, 175, 0]}
        angle={0.4}
        penumbra={0.5}
        intensity={value}
        // shadow-mapSize-width={512}
        // shadow-mapSize-height={512}
      ></animated.spotLight>
    </>
  );
}
