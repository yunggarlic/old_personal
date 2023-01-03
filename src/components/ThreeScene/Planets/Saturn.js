import React, { useRef, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { TextureLoader, RepeatWrapping } from 'three';

export default function Saturn({base}) {
  const saturnRef = useRef();
  const ringRef = useRef();

  useEffect(() => {
    // ringRef.current.rotateX(1.4);
  }, []);

  useFrame(({ clock }) => {
    let t = clock.getElapsedTime();
    saturnRef.current.position.x = Math.sin(t / 12) * 400;
    saturnRef.current.position.z = Math.cos(t / 12) * 360;
    ringRef.current.position.x = Math.sin(t / 12) * 400;
    ringRef.current.position.z = Math.cos(t / 12) * 360;
    // earthRef.current.position.y = Math.cos(t) * 2;

    saturnRef.current.rotation.y += 0.06;
  });
  return (
    <group>
      <mesh ref={saturnRef} position={[0, 0, 340]}>
        <sphereBufferGeometry args={[8, 32, 32]} />
        <meshStandardMaterial map={base} castShadow receiveShadow />
      </mesh>
      <mesh ref={ringRef} position={[0, 0, 340]}>
        <ringGeometry args={[10, 13, 30]} />
        <meshStandardMaterial map={ring} castShadow receiveShadow />
      </mesh>
    </group>
  );
}
