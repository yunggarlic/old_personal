import React, { useRef, useEffect } from 'react';
import Sun from './Planets/Sun';

export default function SolarSystem({ textures, isFocus }) {
  const groupRef = useRef();
  return <Sun textures={textures} isFocus={isFocus} />;
}
