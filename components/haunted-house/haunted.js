import { useControls } from "leva"
import React from 'react'

export default function Cube() {
  return (
    <>
      <ambientLight />
      <Floor />
      <Walls />
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
  return (
    <mesh receiveShadow rotation={[- Math.PI * 0.5, 0, 0]} position={[0, 0, 0]} >
      <planeBufferGeometry attach="geometry" args={[50, 50]} />
      <meshStandardMaterial attach="material" color="white" />
    </mesh>
  );
}

export function Walls() {
  const { y } = useControls('Walls', { y: { value: 1.25, min: 0, max: 10, step: .25 } })

  return (
    <mesh position={[0, y, 0]}>
      <boxGeometry args={[4, 2.5, 4]} />
      <meshStandardMaterial attach="material" color="red" wireframe={true} />
    </mesh>
  );
}

export function Roof() {
  return (
    <mesh position={[0, 2.5 + 0.5, 0]} rotation={[0, Math.PI * 0.25, 0]}>
      <coneGeometry args={[3.5, 1, 4]} />
      <meshStandardMaterial attach="material" color="red" wireframe={true} />
    </mesh>
  );
}

export function Bush(props) {
  return (
    <mesh castShadow
      position={[props.position[0], props.position[1], props.position[2]]}
      scale={[props.scale[0], props.scale[1], props.scale[2]]}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial attach="material" color="red" wireframe={true} />
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
        <mesh castShadow position={[x, 0.3, z]} rotation={[0, (Math.random() - 0.5) * 0.4, (Math.random() - 0.5) * 0.4]}>
          <boxGeometry args={[0.6, 0.8, 0.2]} />
          <meshStandardMaterial attach="material" color="red" wireframe={true} />
        </mesh>
      )
    }

    return <>{graves}</>;
  }
}
