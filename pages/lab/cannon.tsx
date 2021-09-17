import { DoubleSide } from "three"
import { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, Debug, usePlane, useCompoundBody } from '@react-three/cannon'
import styles from '../../styles/Lab.module.scss'
import type { CompoundBodyProps, PlaneProps, Triplet } from '@react-three/cannon'

function Plane(props: PlaneProps) {
  const [ref] = usePlane(() => ({ type: 'Static', ...props }))
  return (
    <group ref={ref}>
      <mesh>
        <planeBufferGeometry args={[8, 8]} />
        <meshBasicMaterial color="#87CAC8" />
      </mesh>
      <mesh receiveShadow>
        <planeBufferGeometry args={[8, 8]} />
        <shadowMaterial color="18403E" />
      </mesh>
    </group>
  )
}

type OurCompoundBodyProps = Pick<CompoundBodyProps, 'position' | 'rotation'>

function CompoundBody(props: OurCompoundBodyProps) {
  const boxSize: Triplet = [1, 1, 1]
  const sphereRadius = 0.65
  const [ref] = useCompoundBody(() => ({
    mass: 12,
    ...props,
    shapes: [
      { type: 'Box', position: [0, 0, 0], rotation: [0, 0, 0], args: boxSize },
      { type: 'Sphere', position: [1, 0, 0], rotation: [0, 0, 0], args: [sphereRadius] },
    ],
  }))
  return (
    <group ref={ref}>
      <mesh castShadow>
        <boxBufferGeometry args={boxSize} />
        <meshPhongMaterial />
      </mesh>
      <mesh castShadow position={[1, 0, 0]}>
        <sphereBufferGeometry args={[sphereRadius, 16, 16]} />
        <meshPhongMaterial color="#ffffff" side={DoubleSide} />
      </mesh>
    </group>
  )
}

export default function () {
  const [ready, set] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => set(true), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={styles.full}>
      <Canvas shadows gl={{ alpha: false }} camera={{ position: [10, 10, 0], fov: 35 }}>
        <color attach="background" args={['#000000']} />
        <hemisphereLight intensity={0.35} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          castShadow
          shadow-mapSize-width={1028}
          shadow-mapSize-height={1028}
        />
        <Physics iterations={6}>
          <Debug scale={0} color="black">
            <Plane rotation={[-Math.PI / 2, 0, 0]} />
            <CompoundBody position={[1.5, 5, 0.5]} rotation={[1.25, 0, 0]} />
            <CompoundBody position={[2.5, 3, 0.25]} rotation={[1.25, -1.25, 0]} />
            {ready && <CompoundBody position={[2.5, 4, 0.25]} rotation={[1.25, -1.25, 0]} />}
          </Debug>
        </Physics>
      </Canvas>
    </div>
  )
}
