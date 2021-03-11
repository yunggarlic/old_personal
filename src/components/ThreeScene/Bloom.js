import React, { useRef, useMemo, useEffect } from 'react';
import * as THREE from 'three';
import { extend, useThree, useFrame, useResource } from 'react-three-fiber';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass';

extend({ EffectComposer, RenderPass, UnrealBloomPass });

export default function Bloom({ children }) {
  const { gl, camera, size } = useThree();
  const ref = useResource();
  const composer = useRef();
  const aspect = useMemo(() => new THREE.Vector2(size.width, size.height), [
    size,
  ]);
  useEffect(
    () => void ref.current && composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => ref.current && composer.current.render(), 1);
  return (
    <>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={ref.current} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[1, 1, 0, 0]} />
      </effectComposer>
    </>
  );
}
