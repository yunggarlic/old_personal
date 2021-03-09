import React, { useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring } from 'react-spring/three';

export default function Controls({ isFocus }) {
  const { x, y, z } = useSpring({
    distance: isFocus ? 5 : 10,
    x: isFocus ? 0 : 8,
    y: isFocus ? 3 : 8,
    z: isFocus ? 5 : 8,
  });

  useFrame(({ camera }) => {
    camera.lookAt(0, 0, 0);
    camera.position.x = x.value;
    camera.position.y = y.value;
    camera.position.z = z.value;
    camera.updateProjectionMatrix();
  });

  return null;
}
