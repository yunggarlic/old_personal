import React, { useRef, useEffect, useState } from 'react';
import { useFrame} from 'react-three-fiber';

export default function Jupiter({base}) {
  const jupiterRef = useRef();

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
