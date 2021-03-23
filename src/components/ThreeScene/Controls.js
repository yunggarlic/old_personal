import React, { useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import { useSpring } from 'react-spring/three';

export default function Controls({ isFocus, setActive, onMobile }) {
  let focusCoords;
  let lookFocus = { x: 0, y: 0, z: 0 };

  if (isFocus === 'about') {
    focusCoords = onMobile
      ? { x: -400, y: 80, z: 180 }
      : { x: -72, y: 70, z: 244 };
    lookFocus = { x: 175, y: 110, z: 100 };
  } else if (isFocus === 'home') {
    focusCoords = { x: 150, y: 150, z: 5 };
    lookFocus = { x: 0, y: 0, z: 0 };
  } else if (isFocus === 'bonus') {
    focusCoords = { x: -200, y: 270, z: -200 };
    lookFocus = { x: 350, y: 100, z: -300 };
  } else if (isFocus === 'work') {
    focusCoords = onMobile
      ? { x: -220, y: -200, z: 0 }
      : { x: -220, y: -200, z: -125 };
    lookFocus = onMobile
      ? { x: -200, y: -205, z: -200 }
      : { x: -190, y: -200, z: -200 };
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
    config: { mass: 15, friction: 90 },
  });

  useFrame(({ camera, clock }) => {
    const t = clock.getElapsedTime();

    setTimeout(() => {
      if (
        camera.position &&
        (mx.done === false || my.done === false || mz.done === false)
      ) {
        setActive(false);
        camera.position.x = mx.value;
        camera.position.y = my.value;
        camera.position.z = mz.value;

        camera.updateProjectionMatrix();
      } else {
        setActive(true);
      }

      camera.lookAt(fx.value, fy.value, fz.value);
    }, 30);
  });

  return null;
}
