import React, { useRef, useEffect } from 'react';
import AboutMeshLights from './AboutMeshLights';
import { useFrame } from 'react-three-fiber';
import { useSpring } from 'react-spring/three';

export default function AboutMesh(props) {
  const { position } = props;
  const mesh = useRef();

  useEffect(() => {
    mesh.current.position.set(position[0], position[1], position[2]);
  });

  useFrame(() => {
    mesh.current.rotation.y += 0.01;
  });

  return (
    <>
      <mesh ref={mesh}>
        <torusGeometry attach="geometry" args={[10, 3, 16, 100]} />
        <meshStandardMaterial />
        <AboutMeshLights />
      </mesh>
    </>
  );
}
