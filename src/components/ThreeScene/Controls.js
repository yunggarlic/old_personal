import React, { useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring } from 'react-spring/three';

export default function Controls({ isFocus, setActive }) {
  let focusCoords;
  let lookFocus = { x: 0, y: 0, z: 0 };
  if (isFocus === 'about') {
    focusCoords = { x: -72, y: 70, z: 244 };
    lookFocus = { x: 175, y: 110, z: 100 };
  } else if (isFocus === 'home') {
    focusCoords = { x: 150, y: 150, z: 5 };

    // focusCoords = { x: -10, y: -70, z: -10 };
    lookFocus = { x: 0, y: 0, z: 0 };
  } else if (isFocus === 'bonus') {
    focusCoords = { x: 32, y: 100, z: 32 };
  } else if (isFocus === 'work') {
    focusCoords = { x: 150, y: 150, z: 5 };
  } else {
    focusCoords = isFocus;
  }

  const { x, y, z } = focusCoords;

  const { mx, my, mz, fx, fy, fz } = useSpring({
    mx: x,
    my: y,
    mz: z,
    fx: lookFocus.x,
    fy: lookFocus.y,
    fz: lookFocus.z,
    config: { mass: 50, friction: 150 },
  });

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();
    camera.lookAt(fx.value, fy.value, fz.value);

    setTimeout(() => {
      if (mx.done === false || my.done === false || mz.done === false) {
        setActive(false);
        if (camera.position) {
          camera.position.x = mx.value;
          camera.position.y = my.value;
          camera.position.z = mz.value;
        }
      } else {
        setActive(true);
      }

      camera.updateProjectionMatrix();
    }, 100);
  });

  return null;
}
