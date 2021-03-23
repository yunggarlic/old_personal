import React, { useRef } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader } from 'three';

export default function Moon() {
  const moonMesh = useRef();

  const base = useLoader(TextureLoader, './textures/moonmap4k.jpeg');

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    moonMesh.current.position.x = Math.sin(t) * 7;
    moonMesh.current.position.z = Math.cos(t) * 6.7;
  });

  return (
    <mesh ref={moonMesh} position={[0, 0, 20]}>
      <sphereBufferGeometry args={[1, 32, 32]} />
      <meshStandardMaterial castShadow receiveShadow map={base} />
    </mesh>
  );
}
