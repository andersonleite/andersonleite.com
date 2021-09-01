import { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Cube(props) {
  // const mesh = useRef()
  // const [hovered, setHover] = useState(false)
  // const [active, setActive] = useState(false)
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01))

  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial color="cyan" wireframe={true} />
    </mesh>
  )
}
