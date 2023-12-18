// import styles from '../../styles/Lab.module.scss'

// import * as THREE from 'three'

// import React, { useRef, useEffect } from 'react';
// import { extend, Canvas, useThree, useFrame } from '@react-three/fiber';
// // import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer'
// // import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass'
// // import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass'
// import dynamic from 'next/dynamic'

// const EffectComposer = dynamic(import('three/examples/jsm/postprocessing/EffectComposer'), { ssr: false }) // Async API cannot be server-side rendered
// const RenderPass = dynamic(import('three/examples/jsm/postprocessing/RenderPass'), { ssr: false }) // Async API cannot be server-side rendered
// const GlitchPass = dynamic(import('three/examples/jsm/postprocessing/GlitchPass'), { ssr: false }) // Async API cannot be server-side rendered

// extend({ EffectComposer, RenderPass, GlitchPass })

// function Effects() {
//   const { gl, scene, camera, size } = useThree()
//   const composer = useRef()
//   useEffect(() => void composer.current.setSize(size.width, size.height), [size])
//   useFrame(() => composer.current.render(), 1)
//   return (
//     <effectComposer ref={composer} args={[gl]}>
//       <renderPass attachArray="passes" args={[scene, camera]} />
//       <glitchPass attachArray="passes" renderToScreen />
//     </effectComposer>
//   )
// }

// export default function TemplatePage() {
//   return (
//     <div className={styles.full}>
//       <Canvas className="canvas" dpr={[1, 2]}>
//         <mesh position={[0,0,0]}>
//           <boxGeometry />
//           <meshBasicMaterial color="orange" />
//         </mesh>
//         <Effects />
//       </Canvas>
//     </div>
//   );
// }
