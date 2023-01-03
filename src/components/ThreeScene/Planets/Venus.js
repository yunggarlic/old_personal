import React, { useRef, useEffect, useState } from 'react';
import { useFrame, useLoader } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';

export default function Venus({base}) {
  const venusRef = useRef();

  useFrame(({ clock }) => {
    let t = clock.getElapsedTime();
    venusRef.current.position.x = Math.sin(t / 6) * 55;
    venusRef.current.position.z = Math.cos(t / 6) * 53;
    // earthRef.current.position.y = Math.cos(t) * 2;

    venusRef.current.rotation.y += 0.01;
  });
  return (
    <mesh ref={venusRef} position={[0, 0, 200]}>
      <sphereBufferGeometry args={[2, 32, 32]} />
      <meshStandardMaterial map={base} castShadow receiveShadow />
    </mesh>
  );
}
