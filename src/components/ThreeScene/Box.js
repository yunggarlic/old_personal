import React, { useMemo } from 'react';
import { useFrame, useThree, useResource } from 'react-three-fiber';
import { useBox } from '@react-three/cannon';
import * as THREE from 'three';
import { TransformControls } from '@react-three/drei';
import niceColors from 'nice-color-palettes';

export default function Box(props) {
  const { number } = props;
  const [ref, api] = useBox(() => ({
    mass: 0.0001,
    args: [0.1, 0.1, 0.1],
    position: [
      Math.random() - 0.5,
      2 + Math.random() * 15,
      Math.random() - 0.5,
    ],
  }));

  //creates random color arrays
  const colors = useMemo(() => {
    const array = new Float32Array(number * 3);
    const color = new THREE.Color();

    for (let i = 0; i < number; i++) {
      color
        .set(niceColors[1][Math.floor(Math.random() * 5)])
        .convertSRGBToLinear()
        .toArray(array, i * 3);
    }
    return array;
  }, [number]);

  //every frame takes a random cube in the scene and reassigns it a new random position above the stage
  useFrame(() =>
    api
      .at(Math.floor(Math.random() * number))
      .position.set(
        Math.random() - 0.5,
        (Math.random() + 10) * 10,
        Math.random() - 0.5
      )
  );

  return (
    <instancedMesh
      receiveShadow
      castShadow
      ref={ref}
      args={[null, null, number]}
    >
      <boxBufferGeometry attach="geometry" args={[0.1, 0.1, 0.1]}>
        <instancedBufferAttribute
          attachObject={['attributes', 'color']}
          args={[colors, 3]}
        />
      </boxBufferGeometry>
      <meshPhongMaterial attach="material" vertexColors={THREE.VertexColors} />
    </instancedMesh>
  );
}
