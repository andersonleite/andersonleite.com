import { DoubleSide } from "three"
import React, { useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Physics, Debug, usePlane, useCompoundBody } from '@react-three/cannon'
import styles from '../../styles/Lab.module.scss'
import type { CompoundBodyProps, PlaneProps, Triplet } from '@react-three/cannon'
import { OrbitControls } from "@react-three/drei";

export default function () {
  const [ready, set] = useState(false)
  useEffect(() => {
    const timeout = setTimeout(() => set(true), 2000)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className={styles.full}>
      <Canvas camera={[0, 2, 4]}>
        <axesHelper args={[5]} visible={true} />
        <OrbitControls />
        {/* <OrbitControls addEventListener={undefined} hasEventListener={undefined} removeEventListener={undefined} dispatchEvent={undefined} /> */}
      </Canvas>
    </div>
  )
}



