import React, { useEffect, useRef } from 'react';
import { useFrame } from 'react-three-fiber';
import { useCylinder } from '@react-three/cannon';
import WorkLight from './WorkLight';

export default function WorkMesh() {
  const mesh = useRef();

  useEffect(() => {
    // mesh.current.position.set(-200, -200, -200);
    // mesh.current.rotation.x = 0.5;
  });

  useFrame(({ clock }) => {
    // const t = clock.getElapsedTime();
    // mesh.current.rotation.y += Math.sin(t) / 25;
  });

  return (
    <>
      <mesh ref={mesh} position={[-200, -200, -200]} scale={[0.5, 0.5, 0.5]}>
        <cylinderBufferGeometry
          args={[5, 2, 10, 32, 1, true, 0, 2 * Math.PI]}
        />
        <meshStandardMaterial />
        <WorkLight planeRef={mesh.current} />
      </mesh>
    </>
  );
}
