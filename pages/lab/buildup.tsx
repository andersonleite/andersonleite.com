import { DoubleSide } from "three"
import React, { useEffect, useRef, useMemo, useState } from 'react'
import niceColors from 'nice-color-palettes'
import create from 'zustand'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture  } from '@react-three/drei'
import styles from '../../styles/buildup.module.scss'
import { usePlane, useBox, useSphere, Physics } from '@react-three/cannon'

function Cube(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="#87CAC8" wireframe={true} />
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
      <meshBasicMaterial attach="material" color="#46bfba" />
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
      <meshBasicMaterial attach="material" side={DoubleSide} color={'#46bfba'} />
    </mesh>
  )
}

function PlaneSlide(props) {
  const [ref, api] = useBox(() => ({ rotation: [-Math.PI / 2, 10, 0], args: [20, 2, 0.01], ...props }))

  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry attach="geometry" args={[20, 2]} />
      <meshBasicMaterial attach="material" side={DoubleSide} color={'#46bfba'} />
    </mesh>
  )
}

function CubeBox(props) {
  const collision = useStoreN(state => state.collision3)
  const setCollision = useStoreN(state => state.setCollision3)

  const [ref] = useBox(() => ({ args: [1, 1, 1], position: [5, 0.5, 0], onCollide: () => setCollision() }))

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={collision ? '#BF5AAA' : '#46bfba'} />
    </mesh>
  )
}

function CubeBox2(props) {
  const collision = useStoreN(state => state.collision2)
  const setCollision = useStoreN(state => state.setCollision2)
  const [ref] = useBox(() => ({ args: [1, 1, 1], position: [0, 0.5, 6], onCollide: () => setCollision() }))

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={collision ? '#BF5AAA' : '#46bfba'} />
    </mesh>
  )
}

type Cubes = {
  collision1: boolean;
  setCollision1: any;

  collision2: boolean;
  setCollision2: any;

  collision3: boolean;
  setCollision3: any;
}

const useStoreN = create<Cubes>(set => ({
  collision1: false,
  setCollision1: () => set({ collision1: true }),
  collision2: false,
  setCollision2: () => set({ collision2: true }),
  collision3: false,
  setCollision3: () => set({ collision3: true })
}))

function CubeBox3(props) {

  const collision = useStoreN(state => state.collision1)
  const setCollision = useStoreN(state => state.setCollision1)
  const [ref] = useBox(() => ({ args: [1, 1, 1], position: [0, 0.5, -6], onCollide: () => setCollision() }))


  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={collision ? '#BF5AAA' : '#46bfba'} />
    </mesh>
  )
}
// =========

export default function () {
  return (
    <div className={styles.full}>
      <Canvas camera={{ position: [5, 4, 8] }}>
          <Cube position={[2, 0.5, 2]} />
          <Cube position={[-2, 0.5, 2]} />
          <Cube position={[-2, 0.5, -2]} />
          <Cube position={[2, 0.5, -2]} />
          <Cylinder args={[0.1, 0.1, 3, 32]} />

          {/* <axesHelper args={[5]} /> */}
          <Physics>
            {/* <Debug color="black" scale={0}> */}
            <Plane color={niceColors[17][4]} args={[1000, 1000]} />
            <PlaneSlide />
            <PlaneFall position={[0, 3.001, 0]} />
            <SphereFall position={[0, 5, 0]} />
            <SphereFall position={[0, 10, 0]} />
            <SphereFall position={[0, 15, 0]} />
            <SphereFall position={[0, 20, 0]} />
            <SphereFall position={[0, 25, 0]} />

            <CubeBox position={[5, 0.5, 0]} />
            {/* TODO: TO detect collision reusing the cube */}
            <CubeBox2 position={[0, 0.5, 6]} />
            <CubeBox3 position={[0, 0.5, -6]} />
            <SphereFall position={[-7, 5, 0]} />

            {/* </Debug> */}
          </Physics>
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2 - 0.5} />
        </Canvas>

    </div>
  )
}
