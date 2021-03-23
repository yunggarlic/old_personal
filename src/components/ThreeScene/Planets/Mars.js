import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';

export default function Mars() {
  const marsRef = useRef();

  const base = useLoader(TextureLoader, './textures/5672_mars_2k_color.jpeg');

  useFrame(({ clock }) => {
    let t = clock.getElapsedTime();
    marsRef.current.position.x = Math.sin(t / 8) * 200;
    marsRef.current.position.z = Math.cos(t / 8) * 150;
    // earthRef.current.position.y = Math.cos(t) * 2;

    marsRef.current.rotation.y += 0.03;
  });
  return (
    <mesh ref={marsRef} position={[0, 0, 200]}>
      <sphereBufferGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={base} castShadow receiveShadow />
    </mesh>
  );
}
