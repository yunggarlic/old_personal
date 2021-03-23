import React, { useRef, useEffect } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';

export default function Mercury() {
  const mercuryRef = useRef();

  const base = useLoader(TextureLoader, './textures/mercurymap.jpeg');

  useFrame(({ clock }) => {
    let t = clock.getElapsedTime();
    mercuryRef.current.position.x = Math.sin(t / 4) * 40;
    mercuryRef.current.position.z = Math.cos(t / 4) * 40;
    // earthRef.current.position.y = Math.cos(t) * 2;

    mercuryRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={mercuryRef} position={[0, 0, 200]}>
      <sphereBufferGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={base} castShadow receiveShadow />
    </mesh>
  );
}
