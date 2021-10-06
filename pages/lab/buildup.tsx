import { DoubleSide } from "three"
import { useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture  } from '@react-three/drei'
import styles from '../../styles/buildup.module.scss'
import { usePlane, useBox, useSphere, Physics } from '@react-three/cannon'

function Cube(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="green" />
    </mesh>
  )
}

// TODO: fix useTexture
// function Cube(props) {

//   const textures = useTexture({
//     'map': '/textures/wall.jpg'
//   })
//   // textures.generateMipmaps = false
//   // textures.minFilter = THREE.NearestFilter;
//   // textures.magFilter = THREE.NearestFilter;

//   return (
//     <mesh {...props}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshBasicMaterial attach="material" {...textures} />
//     </mesh>
//   )
// }

function Cylinder(props) {
  return (
    <mesh position={[0, 1.5, 0]}>
      <cylinderGeometry {...props} />
      <meshBasicMaterial attach="material" color="blue" />
    </mesh>
  )
}


function Sphere(props) {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 4, 0], ...props }))
  useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 1, 1))

  return (
    <mesh >
      <sphereGeometry />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

// Physics
// =========
function Plane({ color, args, ...props }) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
  useEffect(() => {
    ref.current.rotateX(-Math.PI / 2)
  })

  return (
    <mesh ref={ref} {...props}>
      <planeGeometry attach="geometry" args={args} />
      <meshBasicMaterial attach="material" side={DoubleSide} color={color} />
    </mesh>
  )
}

function SphereFall(props) {
  const [ref] = useSphere(() => ({ mass: 1, args: [0.2, 32, 16], ...props }))
  return (
    <mesh receiveShadow castShadow ref={ref}>
      <sphereBufferGeometry attach="geometry" args={[0.2, 32, 16]} />
      <meshNormalMaterial attach="material" color="hotpink" />
    </mesh>
  )
}

function PlaneFall(props) {
  const [ref, api] = useBox(() => ({ rotation: [-Math.PI / 2, 0, 0], args: [2, 2, 0.01], ...props }))
  // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  useFrame(({ clock }) => api.rotation.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0))

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry attach="geometry" args={[2, 2]} />
      <meshBasicMaterial attach="material" side={DoubleSide} color={'red'} />
    </mesh>
  )
}
// =========

export default function () {
  return (
    <div className={styles.full}>
<Canvas camera={{ position: [2, 1, 6] }}>
    <Cube position={[2, 0.5, 2]} />
    <Cube position={[-2, 0.5, 2]} />
    <Cube position={[-2, 0.5, -2]} />
    <Cube position={[2, 0.5, -2]} />
    <Cylinder args={[0.1, 0.1, 3, 32]} />

    <axesHelper args={[5]} />
    <Physics>
      {/* <Debug color="black" scale={0}> */}
      <Plane color={'black'} args={[1000, 1000]} />
      <PlaneFall position={[0, 3.001, 0]} />
      <SphereFall position={[0, 5, 0]} />
      <SphereFall position={[0, 10, 0]} />
      <SphereFall position={[0, 15, 0]} />
      <SphereFall position={[0, 20, 0]} />
      <SphereFall position={[0, 25, 0]} />
      {/* </Debug> */}
    </Physics>
    <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2} />
  </Canvas>

    </div>
  )
}
