import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';

export default function Moon({base}) {
  const moonMesh = useRef();

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
