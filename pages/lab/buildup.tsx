import { DoubleSide } from "three"
import { useEffect, useRef } from 'react'
import { Canvas, MeshProps } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import styles from '../../styles/buildup.module.scss'


function Plane() {
  const ref = useRef<MeshProps>()

  useEffect(() => {
    ref.current?.rotateX(-Math.PI / 2)
  })

  return (
    <mesh ref={ref}>
      <planeGeometry attach="geometry" args={[4, 4]} />
      <meshBasicMaterial attach="material" side={DoubleSide} color="grey" />
    </mesh>
  )
}

function Cube(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="green" />
    </mesh>
  )
}

export default function () {
  return (
    <div className={styles.full}>
      <Canvas camera={{ position: [0, 1, 4] }}>
        <Cube position={[1.5, 0.5, 1.5]} />
        <Cube position={[-1.5, 0.5, 1.5]} />
        <Cube position={[-1.5, 0.5, -1.5]} />
        <Cube position={[1.5, 0.5, -1.5]} />
        <Plane />
        <axesHelper args={[5]} />
        <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} />
      </Canvas>
    </div>
  )
}
