import React, { useEffect, useRef, useState } from 'react';
import { useFrame, extend } from 'react-three-fiber';
import { SpotLightHelper } from 'three';
import { useSpring, animated } from 'react-spring/three';

export default function WorkLight({ planeRef, isFocus }) {
  const mesh = useRef();
  const spotLight = useRef();
  const [toggle, setToggle] = useState(false);
  const { intensity: value } = useSpring({
    intensity: toggle ? 0.07 : 0,
    config: { mass: 15, tension: 15, friction: 15 },
  });

  useFrame(() => {
    isFocus === 'work' ? setToggle(true) : setToggle(false);
  });

  // if (spotLight) useHelper(spotLight, SpotLightHelper, 'red');

  return (
    <>
      <mesh ref={mesh} position={[-300, -180, -180]}>
        <sphereGeometry args={[0.1, 0.1, 0.1]} />
        <shadowMaterial />
        <animated.spotLight
          intensity={value}
          ref={spotLight}
          target={planeRef.current}
        />
      </mesh>
    </>
  );
}
