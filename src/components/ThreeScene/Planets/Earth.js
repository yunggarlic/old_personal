import React, { useRef} from 'react';
import { useFrame} from 'react-three-fiber';
import Moon from './Moon';

export default function Earth({base}) {
  const earthRef = useRef();
  const groupRef = useRef();

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
