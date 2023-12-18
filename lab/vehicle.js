// import styles from '../../styles/Lab.module.scss'

// import React, { Suspense } from 'react';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, Environment } from '@react-three/drei'
// import { Physics, useCylinder, usePlane } from '@react-three/cannon'

// import Vehicle from '../../components/vehicle/vehicle'

// export default function VehiclePage() {
//   return (
//     <div className={styles.full}>
//       <Canvas dpr={[1, 2]} shadows camera={{ position: [0, 5, 15], fov: 50 }}>
//         <fog attach="fog" args={['#171720', 10, 50]} />
//         <color attach="background" args={['#171720']} />
//         <ambientLight intensity={0.1} />
//         <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={1} />
//         <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
//           <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 0.5, 0]} wheelRadius={0.3} />
//           <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{ id: 'floor' }} />
//           <Pillar position={[-5, 2.5, -5]} userData={{ id: 'pillar-1' }} />
//           <Pillar position={[0, 2.5, -5]} userData={{ id: 'pillar-2' }} />
//           <Pillar position={[5, 2.5, -5]} userData={{ id: 'pillar-3' }} />
//         </Physics>
//         <Suspense fallback={null}>
//           <Environment preset="night" />
//         </Suspense>
//         <OrbitControls />
//       </Canvas>
//     </div>
//   );
// }

// function Plane(props) {
//   const [ref] = usePlane(() => ({ type: 'Static', material: 'ground', ...props }))
//   return (
//     <group ref={ref}>
//       <mesh receiveShadow>
//         <planeGeometry args={[100, 100]} />
//         <meshStandardMaterial color="#303030" />
//       </mesh>
//     </group>
//   )
// }

// function Pillar({ args = [0.7, 0.7, 5, 16], ...props }) {
//   const [ref] = useCylinder(() => ({ mass: 10, args, ...props }))
//   return (
//     <mesh ref={ref} castShadow>
//       <cylinderGeometry args={args} />
//       <meshNormalMaterial />
//     </mesh>
//   )
// }
