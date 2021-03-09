// import React, { useState } from 'react';
// import { useBox } from '@react-three/cannon';
// import { useFrame } from 'react-three-fiber';
// import { useSpring, animated } from 'react-spring/three';
// export default function Plane(props) {
//   const [ref, api] = useBox(() => ({ mass: 0, args: [5, 5, 5], ...props }));
//   const [toggle, setToggle] = useState(false);
//   const x = useSpring({
//     y: toggle ? 5 : 0,
//     background: toggle ? '#ffffff' : '#ff78ff',
//     config: { mass: 20, tension: 100, friction: 20 },
//   });

//   useFrame(({ clock }) => {
//     const t = clock.getElapsedTime();
//     if (x.y.done === true) {
//       setToggle(!toggle);
//     }
//     //api.position.set(0, x.y.value, 0);
//   });

//   return (
//     <animated.mesh castShadow ref={ref} color={x.background} receiveShadow>
//       <boxBufferGeometry attach="geometry" args={[5, 5, 5]} />
//       <animated.meshPhongMaterial color={x.background} />
//     </animated.mesh>
//   );
// }
