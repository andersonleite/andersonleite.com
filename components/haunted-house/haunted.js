import { useControls } from 'leva'
import { useTexture } from '@react-three/drei'
import React, { Suspense, useRef } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Haunted() {
  return (
    <>
      <ambientLight args={['#b9d5ff', 0.12]} />
      <directionalLight args={['#b9d5ff', 0.12]} castShadow={true}
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={15}
        position={[4, 5, - 2]}
      />
      <pointLight
        args={['#fff', 2, 3]}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
        position={[0, 2.2, 2.7]}
      />

      {/* <fog args={['#262837', 1, 15]} /> */}
      <fog attach="fog" args={['#d0d0d0', 5, 10]} />nvm list

      <Suspense fallback={null}>
        <Door />
        <Floor />
        <Walls />
      </Suspense>
      <Roof />
      <Bush position={[0.8, 0.2, 2.2]} scale={[0.5, 0.5, 0.5]} />
      <Bush position={[1.4, 0.1, 2.1]} scale={[0.25, 0.25, 0.25]} />
      <Bush position={[- 0.8, 0.1, 2.2]} scale={[0.4, 0.4, 0.4]} />
      <Bush position={[- 1, 0.05, 2.6]} scale={[0.15, 0.15, 0.15]} />
      <Grave />
      <Ghosts />
    </>
  )
}

export function Floor() {

  const textures = useTexture({
    map: '/textures/grass/color.jpg',
    aoMap: '/textures/grass/ambientOcclusion.jpg',
    normalMap: '/textures/grass/normal.jpg',
    roughnessMap: '/textures/grass/roughness.jpg'
  })

  return (
    <mesh receiveShadow rotation={[- Math.PI * 0.5, 0, 0]} position={[0, 0, 0]} >
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <meshStandardMaterial {...textures} />
    </mesh>
  );
}

export function Door() {

  const textures = useTexture({
    map: '/textures/door/color.jpg',
    alphaMap: '/textures/door/alpha.jpg',
    aoMap: '/textures/door/ambientOcclusion.jpg',
    displacementMap: '/textures/door/height.jpg',
    normalMap: '/textures/door/normal.jpg',
    metalnessMap: '/textures/door/metalness.jpg',
    roughnessMap: '/textures/door/roughness.jpg'
  })

  return (
    <mesh receiveShadow position={[0, 1, 2 + 0.01]} >
      <planeBufferGeometry attach="geometry" args={[2, 2, 100, 100]} />
      <meshStandardMaterial attach="material" transparent={true} displacementScale={0.1}
        {...textures}
      />
    </mesh>
  );
}

export function Walls() {
  const { y } = useControls('Walls', { y: { value: 1.25, min: 0, max: 10, step: .25 } })

  const textures = useTexture({
    map: '/textures/bricks/color.jpg',
    aoMap: '/textures/bricks/ambientOcclusion.jpg',
    normalMap: '/textures/bricks/normal.jpg',
    roughnessMap: '/textures/bricks/roughness.jpg'
  })

  return (
    <mesh position={[0, y, 0]} castShadow={true}>
      <boxGeometry args={[4, 2.5, 4]} />
      <meshStandardMaterial attach="material" {...textures} />
    </mesh>
  );
}

export function Roof() {
  return (
    <mesh position={[0, 2.5 + 0.5, 0]} rotation={[0, Math.PI * 0.25, 0]}>
      <coneGeometry args={[3.5, 1, 4]} />
      <meshStandardMaterial attach="material" color="#b35f45" wireframe={false} />
    </mesh>
  );
}

export function Bush(props) {
  return (
    <mesh castShadow
      position={[props.position[0], props.position[1], props.position[2]]}
      scale={[props.scale[0], props.scale[1], props.scale[2]]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial attach="material" color="#89c854" wireframe={false} />
    </mesh>
  );
}

function Grave() {

  let graves = [];
  for (let i = 0; i < 50; i++) {
    const angle = Math.random() * Math.PI * 2
    const radius = 3 + Math.random() * 6
    const x = Math.cos(angle) * radius
    const z = Math.sin(angle) * radius

    graves.push(
      <mesh castShadow position={[x, 0.3, z]} rotation={[0, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4]} key={i}>
        <boxGeometry args={[0.6, 0.8, 0.2]} />
        <meshStandardMaterial attach="material" color="r#b2b6b1ed" wireframe={false} />
      </mesh>
    )
  }

  return (
    <group dispose={null}>
      {graves}
    </group>
  )
}

function Ghosts() {
  const ghost1 = useRef()
  const ghost2 = useRef()
  const ghost3 = useRef()

  useFrame((state, delta) => {
    // This function runs 60 times/second, it binds this component to the render-loop.
    // On unmount this subscription is cleaned up automatically.

    const elapsedTime = state.clock.getElapsedTime()

    // Ghosts
    const ghost1Angle = elapsedTime * 0.5
    ghost1.current.position.x = Math.cos(ghost1Angle) * 4
    ghost1.current.position.z = Math.sin(ghost1Angle) * 4
    ghost1.current.position.y = Math.sin(elapsedTime * 3)

    const ghost2Angle = - elapsedTime * 0.32
    ghost2.current.position.x = Math.cos(ghost2Angle) * 5
    ghost2.current.position.z = Math.sin(ghost2Angle) * 5
    ghost2.current.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5)

    const ghost3Angle = - elapsedTime * 0.18
    ghost3.current.position.x = Math.cos(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.32))
    ghost3.current.position.z = Math.sin(ghost3Angle) * (7 + Math.sin(elapsedTime * 0.5))
    ghost3.current.position.y = Math.sin(elapsedTime * 4) + Math.sin(elapsedTime * 2.5)
  })

  return (
    <group dispose={null}>
      <pointLight ref={ghost1}
        args={['#fff', 2, 3]}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
      />
      <pointLight ref={ghost2}
        args={['#fff', 2, 3]}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
      />
      <pointLight ref={ghost3}
        args={['#fff', 2, 3]}
        castShadow
        shadow-mapSize-width={256}
        shadow-mapSize-height={256}
        shadow-camera-far={7}
      />
    </group>
  )
}
