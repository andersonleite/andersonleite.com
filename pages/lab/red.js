import dynamic from 'next/dynamic'
import styles from '../../styles/Lab.module.scss'
import { OrbitControls  } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'
import { DoubleSide } from "three"
import { useFrame } from '@react-three/fiber'

const SceneWithoutSSR = dynamic(
  () => import('../../components/Scene'),
  { ssr: false }
)


function Plane() {
  const ref = useRef()

  useEffect(() => {
    ref.current.rotateX(-Math.PI / 2)
  })

  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" side={DoubleSide} color="grey" />
    </mesh>
  )
}

function Wall() {
  const ref = useRef()

  useEffect(() => {
    // ref.current.rotateX(-Math.PI / 2)
  })

  return (
    <mesh ref={ref} position={[0,0,-5]}>
      <planeGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" side={DoubleSide} color="grey" />
    </mesh>
  )
}

function Wall2() {
  const ref = useRef()

  useEffect(() => {
    ref.current.rotateY(-Math.PI / 2)
  })

  return (
    <mesh ref={ref} position={[5,0,0]}>
      <planeGeometry attach="geometry" args={[1000, 1000]} />
      <meshPhongMaterial attach="material" side={DoubleSide} color="grey" />
    </mesh>
  )
}

function Box(props) {

  return (
    <mesh {...props}>
      <boxGeometry attach="geometry" args={[5, 2, 2]} />
      <meshPhongMaterial color="red" args={[{ side: DoubleSide }]} transparent={true} opacity={.5} />
    </mesh>
  )
}

function Plant() {

  return (
    <mesh position={[-3, 0, 0]}>
      <sphereGeometry args={[.5, 30, 30]} />
      <meshBasicMaterial color="darkgreen" wireframe={true} />
    </mesh>
  )
}

function Person () {
  const person = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    person.current.position.x = Math.sin(time / 2)

    person.current.rotation.x = Math.sin(time / 2)
  })

  return (
    <mesh ref={person} position={[0, 1, 0]}>
      <sphereGeometry args={[.5, 30, 30]} />
      <meshBasicMaterial color="black" wireframe={true} />
    </mesh>
  )
}

export default function LabPage() {
  return (
    <div className={styles.full}>
      <SceneWithoutSSR x={-5} y={3} z={6}>
        <ambientLight color={'black'}/>
        <directionalLight color={'red'} intensity={1} position={[1, 1, 1]} />
        <Plane />
        <Wall />
        <Wall2 />
        <Plant />
        <fog attach="fog" args={['red', 1, 20]} />
        <Box position={[0, 1, 0]} />
        <Person />
        {/* <axesHelper args={[5]} /> */}
        <OrbitControls />
      </SceneWithoutSSR>
    </div>
  )
}
