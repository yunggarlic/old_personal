import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

export default function AboutMeshLights() {
  const pointLight = useRef();
  const pointLight2 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    pointLight.current.position.z = 20 * Math.sin(t);
    pointLight.current.position.y = 10 * Math.cos(t) + 10;

    pointLight2.current.position.z = -20 * Math.sin(t);
    pointLight2.current.position.y = 10 * Math.cos(t) - 10;
  });
  return (
    <>
      <pointLight
        ref={pointLight}
        color={0x26ab33}
        decay={2}
        intensity={0.1}
        distance={50}
      >
        <mesh>
          <sphereBufferGeometry />
          <meshBasicMaterial color={0x0040ff} />
        </mesh>
      </pointLight>
      <pointLight
        ref={pointLight2}
        color={0xfa3874}
        decay={2}
        intensity={0.1}
        distance={50}
      >
        <mesh>
          <sphereBufferGeometry />
          <meshBasicMaterial color={0xfa3874} />
        </mesh>
      </pointLight>
    </>
  );
}
