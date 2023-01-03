import React, {useRef, useState, useEffect} from 'react'
import {useFrame} from 'react-three-fiber'
import {useSpring, animated} from 'react-spring/three'
import * as THREE from 'three'
import {TextureLoader} from 'three/src/loaders/TextureLoader'
import {Earth, Mars, Mercury, Venus, Jupiter, Saturn} from './'
import { Suspense } from 'react'

export default function Sun({isFocus, textures}) {
  const [toggle, setToggle] = useState(false);
  const [sun, mercury, venus, earth, mars, jupiter] = textures;

  const sunRef = useRef()
  const solarSystemRef = useRef()
  const sunLightRef = useRef()
  const {intensity: value} = useSpring({
    intensity: toggle ? 0.3 : 0,
    config: {mass: 15, tension: 15, friction: 50},
  })



  useFrame(({clock}) => {
    const t = clock.getElapsedTime()

    isFocus === 'bonus' ? setToggle(true) : setToggle(false)

    sunRef.current.position.x = Math.sin(t) * 5
    sunRef.current.position.z = Math.cos(t) * 2
  })

  return (
    <Suspense fallback={<></>}>
      <group ref={solarSystemRef} position={[350, 100, -300]} dispose={null}>
        <mesh ref={sunRef} position={[0, 0, 5]}>
          <animated.pointLight
            color={0xffffff}
            decay={2}
            intensity={value}
            distance={600}
            ref={sunLightRef}
          />
          <sphereBufferGeometry attach="geometry" args={[20, 64, 64]} />
          <meshBasicMaterial map={sun} color={0xebcf0b} />

          <Mercury base={mercury}/>
          <Venus base={venus}/>
          <Earth base={earth}/>
          <Mars base={mars}/>
          <Jupiter base={jupiter}/>
          {/* <Saturn /> */}
        </mesh>
      </group>
    </Suspense>
  )
}
