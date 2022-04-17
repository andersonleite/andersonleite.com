import * as THREE from 'three'
import { DoubleSide, InstancedMesh } from "three"
import React, { useEffect, useRef, useMemo, useState } from 'react'
import niceColors from 'nice-color-palettes'
import create from 'zustand'


import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useTexture, Sky  } from '@react-three/drei'
import styles from '../../styles/buildup.module.scss'
import { usePlane, useBox, useSphere, Physics } from '@react-three/cannon'
import { Ball, Cube, Cylinder } from '../../components/buildup/buildup'

import Vehicle from '../../components/vehicle/vehicle'

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
      <meshNormalMaterial attach="material" />
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

type Cube = {
  collision: boolean
  setCollision?: () => void
}

type Cubes = {
  cube1: Cube
  cube2: Cube
  cube3: Cube
}

const useStoreN = create<Cubes>(set => ({
  cube1: { collision: false, setCollision: () => set({ cube1: { collision: true} }) },
  cube2: { collision: false, setCollision: () => set({ cube2: { collision: true} }) },
  cube3: { collision: false, setCollision: () => set({ cube3: { collision: true} }) },
}))

function CubeBox(props) {
  const cube1 = useStoreN(state => state.cube1)

  const [ref] = useBox(() => ({ args: [1, 1, 1], position: [5, 0.5, 0], onCollide: () => cube1.setCollision() }))

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={cube1.collision ? '#BF5AAA' : '#46bfba'} />
    </mesh>
  )
}

function CubeBox2(props) {
  const cube2 = useStoreN(state => state.cube2)
  const [ref] = useBox(() => ({ args: [1, 1, 1], position: [0, 0.5, 6], onCollide: () => cube2.setCollision() }))

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={cube2.collision ? '#BF5AAA' : '#46bfba'} />
    </mesh>
  )
}

function CubeBox3(props) {
  const cube3 = useStoreN(state => state.cube3)
  const [ref] = useBox(() => ({ args: [1, 1, 1], position: [0, 0.5, -6], onCollide: () => cube3.setCollision() }))

  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color={cube3.collision ? '#BF5AAA' : '#46bfba'} />
    </mesh>
  )
}

function SphereInstancedFall(props) {
  const [ref] = useSphere(() => ({ mass: 1, args: [0.2, 32, 16], ...props }))
  return (
    <instancedMesh receiveShadow castShadow ref={ref} args={[null, null, 10]}>
      <sphereBufferGeometry attach="geometry" args={[0.2, 32, 16]} />
      <meshBasicMaterial color={'#C9BA73'} />
    </instancedMesh>
  )
}
// =========

// Stairs
const nInst = 24;
const geom = new THREE.BoxGeometry(3, .025, .5).translate(1.5 - .1, 0, 0);
const mat = new THREE.MeshPhongMaterial({color: 'rebeccapurple'});
const stair = new THREE.InstancedMesh(geom, mat, nInst);
stair.castShadow = true;
stair.receiveShadow = true;

function Stair () {
  return (
    <mesh castShadow receiveShadow>
      {/* TODO translate={[1.5-.1, 0, 0]} */}
      <boxGeometry args={[3, .025, .5]}  />
      <meshPhongMaterial color={'rebeccapurple'} />
    </mesh>
  )
}


// function Pole() {
//   return (
//     <mesh>
//       <cylinderGeometry
//     </mesh>
//     const geom = new THREE.CylinderGeometry(.05, .05, 100, 16, 1);
//     const mesh = new THREE.Mesh(geom, mat);
//     stair.add(mesh);
//   )
// }

// == stairs

const tempObject = new THREE.Object3D()
function Spheres() {
  const meshRef = useRef<InstancedMesh>()

  useEffect(() => {
    let i = 0

    for (let z = 0; z < 10; z++) {
      const id = i++
      tempObject.position.set(-5, 0, 5-z)
      tempObject.scale.setScalar(1)
      tempObject.updateMatrix()
      meshRef.current.setMatrixAt(id, tempObject.matrix)
    }
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[null, null, 10]} >
      <boxGeometry args={[0.6, 0.6, 0.6]} />
      <meshBasicMaterial color={'#ffffff'} />
    </instancedMesh>
  )
}

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
            <CubeBox2 position={[0, 0.5, 6]} />
            <CubeBox3 position={[0, 0.5, -6]} />

            <SphereFall position={[-7, 5, 0]} />
            <SphereInstancedFall />

            {/* </Debug> */}
            <Vehicle position={[-10, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 0.5, 0]} wheelRadius={0.3} />
          </Physics>

          <Spheres />
          <OrbitControls enablePan={false} enableZoom={false} maxPolarAngle={Math.PI / 2 - 0.5} />

          <Ball />
          {/* <Pole /> */}
          <Sky sunPosition={[100, 10, 100]} distance={1000} />
          <Stair />
          <ambientLight color={'white'} intensity={.5} />
          {/* TODO // light0.shadow.bias = -0.00002; */}
          <directionalLight castShadow position={[1,5,1]} />
        </Canvas>

    </div>
  )
}
