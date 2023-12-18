// import styles from '../../styles/Scroll.module.scss'
// import * as THREE from "three"
// import React, { useRef, useEffect } from "react"
// import { Canvas, useFrame } from "@react-three/fiber"
// import { Block, useBlock } from "../../components/scroll/blocks"
// import state from "../../components/scroll/store"
// // import "./styles.css"

// function Plane({ color = "white", ...props }) {
//   return (
//     <mesh {...props}>
//       <planeGeometry />
//       <meshBasicMaterial color={color} />
//     </mesh>
//   )
// }

// function Cross() {
//   const ref = useRef()
//   const { viewportHeight } = useBlock()
//   useFrame(() => {
//     const curTop = state.top.current
//     const curY = ref.current.rotation.z
//     const nextY = (curTop / ((state.pages - 1) * viewportHeight * state.zoom)) * Math.PI
//     ref.current.rotation.z = THREE.MathUtils.lerp(curY, nextY, 0.1)
//   })
//   return (
//     <group ref={ref} scale={[2, 2, 2]}>
//       <Plane scale={[1, 0.2, 0.2]} color="#e2bfca" />
//       <Plane scale={[0.2, 1, 0.2]} color="#e2bfca" />
//     </group>
//   )
// }

// function Content({ left, children }) {
//   const { contentMaxWidth, canvasWidth, margin } = useBlock()
//   const aspect = 1.75
//   const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
//   return (
//     <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
//       <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#bfe2ca" />
//       {children}
//     </group>
//   )
// }

// function Stripe() {
//   const { contentMaxWidth } = useBlock()
//   return (
//     <Plane scale={[100, contentMaxWidth, 1]} rotation={[0, 0, Math.PI / 4]} position={[0, 0, -1]} color="#e3f6f5" />
//   )
// }

// export default function ScrollPage() {
//   const scrollArea = useRef()
//   const onScroll = (e) => (state.top.current = e.target.scrollTop)
//   useEffect(() => void onScroll({ target: scrollArea.current }), [])
//   return (
//     <>
//       <Canvas className="canvas full" linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
//         {/* First section */}
//         <Block factor={1.5} offset={0}>
//           <Content left />
//         </Block>
//         {/* Second section */}
//         <Block factor={2.0} offset={1}>
//           <Content />
//         </Block>
//         {/* Stripe */}
//         <Block factor={-1.0} offset={1}>
//           <Stripe />
//         </Block>
//         {/* Last section */}
//         <Block factor={1.5} offset={2}>
//           <Content left>
//             <Block factor={-0.5}>
//               <Cross />
//             </Block>
//           </Content>
//         </Block>
//       </Canvas>
//       <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
//         <div style={{ height: `${state.pages * 100}vh` }} />
//       </div>
//     </>
//   )
// }
