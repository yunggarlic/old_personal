import React, { useRef, useEffect } from 'react';
import { useFrame } from 'react-three-fiber';
import Sun from './Planets/Sun';

export default function SolarSystem({ isFocus }) {
  const groupRef = useRef();

  return <Sun isFocus={isFocus} />;
}
