import React, { Suspense } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Blender() {
  return (
    <Suspense fallback={null}>
      <ambientLight args={['#b9d5ff', 0.12]} />
      <directionalLight args={['#b9d5ff', 0.12]} castShadow={true}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={15}
        position={[4, 5, - 2]}
      />
      <Burger />
    </Suspense>
  )
}

function Burger(props) {
  const { scene } = useGLTF('/models/burg2.glb')
  // <primitive /> merely throws an already existing threejs object into the scene.
  // You use it when you want to create an object imperatively, or when you get served one.
  // In this case THREE.GLTFLoader serves us a scene.
  return <primitive object={scene} {...props} />
}
