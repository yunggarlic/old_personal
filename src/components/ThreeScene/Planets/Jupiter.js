import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';

export default function Jupiter() {
  const jupiterRef = useRef();

  const base = useLoader(TextureLoader, './textures/jupiter2_2k.jpeg');

  useFrame(({ clock }) => {
    let t = clock.getElapsedTime();
    jupiterRef.current.position.x = Math.sin(t / 8) * 300;
    jupiterRef.current.position.z = Math.cos(t / 8) * 280;
    // earthRef.current.position.y = Math.cos(t) * 2;

    jupiterRef.current.rotation.y += 0.06;
  });
  return (
    <mesh ref={jupiterRef} position={[0, 0, 200]}>
      <sphereBufferGeometry args={[10, 32, 32]} />
      <meshStandardMaterial map={base} castShadow receiveShadow />
    </mesh>
  );
}
