import { DoubleSide } from "three"
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Tetrahedron() {
  const skelet = useRef()

  useFrame(() => {
    skelet.current.rotation.x -= 0.0010;
    skelet.current.rotation.y += 0.0020;
  })

  return (
    <mesh scale={[10, 10, 10]} ref={skelet}>
      <icosahedronGeometry args={[15, 1]} />
      <meshPhongMaterial color="#ffffff" wireframe={true} args={[{ side: DoubleSide }]} />
    </mesh>
  )
}
