import { useControls } from 'leva'
import { useTexture } from '@react-three/drei'
import React, { Suspense } from 'react'
import { Fog } from 'three'

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

      <fog args={['#262837', 1, 15]} />

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
    </>
  )
}

export function Floor() {

  const [grassColorTexture,
    grassAmbientOcclusionTexture,
    grassNormalTexture,
    grassRoughnessTexture] =
    useTexture([
      '/textures/grass/color.jpg',
      '/textures/grass/ambientOcclusion.jpg',
      '/textures/grass/normal.jpg',
      '/textures/grass/roughness.jpg'])

  return (
    <mesh receiveShadow rotation={[- Math.PI * 0.5, 0, 0]} position={[0, 0, 0]} >
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <meshStandardMaterial attach="material"
        map={grassColorTexture}
        aoMap={grassAmbientOcclusionTexture}
        normalMap={grassNormalTexture}
        roughnessMap={grassRoughnessTexture} />
    </mesh>
  );
}

export function Door() {

  const [doorColorTexture,
    doorAlphaTexture,
    doorAmbientOcclusionTexture,
    doorHeightTexture,
    doorNormalTexture,
    doorMetalnessTexture,
    doorRoughnessTexture] =
    useTexture([
      '/textures/door/color.jpg',
      '/textures/door/alpha.jpg',
      '/textures/door/ambientOcclusion.jpg',
      '/textures/door/height.jpg',
      '/textures/door/normal.jpg',
      '/textures/door/metalness.jpg',
      '/textures/door/roughness.jpg'])

  return (
    <mesh receiveShadow position={[0, 1, 2 + 0.01]} >
      <planeBufferGeometry attach="geometry" args={[2, 2, 100, 100]} />
      <meshStandardMaterial attach="material" transparent={true} displacementScale={0.1}
        map={doorColorTexture}
        alphaMap={doorAlphaTexture}
        aoMap={doorAmbientOcclusionTexture}
        displacementMap={doorHeightTexture}
        normalMap={doorNormalTexture}
        metalnessMap={doorMetalnessTexture}
        roughnessMap={doorRoughnessTexture}
      />
    </mesh>
  );
}



export function Walls() {
  const { y } = useControls('Walls', { y: { value: 1.25, min: 0, max: 10, step: .25 } })
  // const bricksColorTexture = useTexture('/textures/bricks/color.jpg')
  const [bricksColorTexture,
    bricksAmbientOcclusionTexture,
    bricksNormalTexture,
    bricksRoughnessTexture] =
    useTexture([
      '/textures/bricks/color.jpg',
      '/textures/bricks/ambientOcclusion.jpg',
      '/textures/bricks/normal.jpg',
      '/textures/bricks/roughness.jpg'])

  return (
    <mesh position={[0, y, 0]} castShadow={true}>
      <boxGeometry args={[4, 2.5, 4]} />
      {/* <meshStandardMaterial {...props} /> */}
      <meshStandardMaterial attach="material"
        map={bricksColorTexture}
        aoMap={bricksAmbientOcclusionTexture}
        normalMap={bricksNormalTexture}
        roughnessMap={bricksRoughnessTexture} />
      {/* <meshStandardMaterial attach="material" color="red" wireframe={true} /> */}
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

class Grave extends React.Component {
  render() {
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

    return <>{graves}</>;
  }
}
