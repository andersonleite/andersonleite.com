import { DoubleSide } from "three"
import { useEffect, useRef, Suspense } from 'react'
import { Canvas, MeshProps } from '@react-three/fiber'
import { OrbitControls, useTexture } from '@react-three/drei'
import styles from '../../styles/buildup.module.scss'
import * as THREE from "three";

function Plane({ color, args, ...props }) {
  const ref = useRef()

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


function Cube(props) {

  const textures = useTexture({
    'map': '/textures/wall.jpg'
  })
  // textures.generateMipmaps = false
  // textures.minFilter = THREE.NearestFilter;
  // textures.magFilter = THREE.NearestFilter;

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" {...textures} />
    </mesh>
  )
}

function Cylinder(props) {
  return (
    <mesh position={[0, 1.5, 0]}>
      <cylinderGeometry {...props} />
      <meshBasicMaterial attach="material" color="blue" />
    </mesh>
  )
}

function Sphere(props) {
  return (
    <mesh position={[0, 3.2, 0]}>
      <sphereGeometry {...props} />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}

export default function () {
  return (
    <div className={styles.full}>
      <Canvas camera={{ position: [2, 4, 5] }}>
        <Suspense fallback={null}>
          <Cube position={[2, 0.5, 2]} />
          <Cube position={[-2, 0.5, 2]} />
          <Cube position={[-2, 0.5, -2]} />
          <Cube position={[2, 0.5, -2]} />
        </Suspense>
        <Cylinder args={[0.1, 0.1, 3, 32]} />
        <Plane args={[5, 5]} color={'grey'} />
        <Plane args={[2, 2]} color={'red'} position={[0, 3.001, 0]} />
        <axesHelper args={[5]} />
        <Sphere args={[0.2, 32, 16]} />
        <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
      </Canvas>,
    </div>
  )
}
