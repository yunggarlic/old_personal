import React, { useRef, useState } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { useSpring, animated } from 'react-spring/three';
import * as THREE from 'three';
import { Earth, Mars, Mercury, Venus, Jupiter, Saturn } from './';

export default function Sun({ isFocus }) {
  const [toggle, setToggle] = useState(false);

  const sunRef = useRef();
  const solarSystemRef = useRef();
  const sunLightRef = useRef();
  const { intensity: value } = useSpring({
    intensity: toggle ? 0.3 : 0,
    config: { mass: 15, tension: 15, friction: 50 },
  });

  const base = useLoader(THREE.TextureLoader, './textures/sunmap.jpeg');
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    isFocus === 'bonus' ? setToggle(true) : setToggle(false);

    sunRef.current.position.x = Math.sin(t) * 5;
    sunRef.current.position.z = Math.cos(t) * 2;
  });

  return (
    <group ref={solarSystemRef} position={[350, 100, -300]}>
      <mesh ref={sunRef} position={[0, 0, 5]}>
        <animated.pointLight
          color={0xffffff}
          decay={2}
          intensity={value}
          distance={600}
          ref={sunLightRef}
        />
        <sphereBufferGeometry attach="geometry" args={[20, 64, 64]} />
        <meshBasicMaterial map={base} color={0xebcf0b} />

        <Mercury />
        <Venus />
        <Earth />
        <Mars />
        <Jupiter />
        {/* <Saturn /> */}
      </mesh>
    </group>
  );
}
