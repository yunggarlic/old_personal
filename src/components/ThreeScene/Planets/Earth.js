import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';
import Moon from './Moon';

export default function Earth() {
  const earthRef = useRef();
  const groupRef = useRef();

  const base = useLoader(TextureLoader, './textures/earthmap1k.jpeg');

  useFrame(({ clock }) => {
    let t = clock.getElapsedTime();
    earthRef.current.position.x = Math.sin(t / 10) * 100;
    earthRef.current.position.z = Math.cos(t / 10) * 100;
    // earthRef.current.position.y = Math.cos(t) * 2;

    earthRef.current.rotation.y += 0.03;
  });
  return (
    <mesh ref={earthRef} position={[0, 0, 100]}>
      <sphereBufferGeometry args={[3, 32, 32]} />
      <meshStandardMaterial map={base} castShadow receiveShadow />
      <Moon />
    </mesh>
  );
}
