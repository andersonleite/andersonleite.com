import { DoubleSide, FlatShading } from "three"
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'

export default function Tetrahedron() {
  const skelet = useRef()
  const planet = useRef()

  useFrame(() => {
    skelet.current.rotation.x -= 0.0010;
    skelet.current.rotation.y += 0.0020;
    planet.current.rotation.y -= 0.0030;
    planet.current.rotation.x -= 0.0020;
  })

  return (
    <>
      <Particles />
      <mesh scale={[16, 16, 16]} ref={planet}>
        <icosahedronGeometry args={[7, 1]} />
        <meshPhongMaterial color="#ffffff" args={[{ shading: FlatShading }]} />
      </mesh>
      <mesh scale={[10, 10, 10]} ref={skelet}>
        <icosahedronGeometry args={[15, 1]} />
        <meshPhongMaterial color="#ffffff" wireframe={true} args={[{ side: DoubleSide }]} />
      </mesh>
    </>
  )
}

function Particles() {
  const group = useRef()

  let particles = [];
  for (let i = 0; i < 1000; i++) {

    mesh.position.set(1,2,3).normalize();
    mesh.position.multiplyScalar(123)

    particles.push(
      <mesh
        position-multiply-scalar={[90 + (Math.random() * 700)]}
        position={[Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]} key={i}>
        <tetrahedronGeometry
          rotation={[Math.random() * 2, Math.random() * 2, Math.random() * 2]}
          args={[2, 0]} />
        <meshPhongMaterial color="#ffffff" args={[{ shading: FlatShading }]} />
      </mesh>
    )
  }

  return (
    <group ref={group} dispose={null}>
      {particles}
    </group>
  )
}