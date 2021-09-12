import { DoubleSide } from "three"
import { useRef, useEffect } from 'react'
import { useFrame } from "@react-three/fiber";

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
      <mesh scale={[16, 16, 16]} ref={planet}>
        <icosahedronGeometry args={[7, 1]} />
        <meshPhongMaterial color="#ffffff" args={[{ flatShading: true }]} />
      </mesh>
      <mesh scale={[10, 10, 10]} ref={skelet}>
        <icosahedronGeometry args={[15, 1]} />
        <meshPhongMaterial color="#ffffff" wireframe={true} args={[{ side: DoubleSide }]} />
      </mesh>
      <Particles />
    </>
  )
}

function Particles() {
  const particles = useRef()

  useEffect(() => {
    particles.current.children.forEach(particle => {
      particle.position.normalize()
      particle.position.multiplyScalar(90 + (Math.random() * 700))
    })
  }, [])

  useFrame(() => {
    particles.current.rotation.x += 0.0000;
    particles.current.rotation.y -= 0.0040;
  })

  return (
    <group ref={particles}>
      {Array(1000).fill().map((item, idx) => (
        <mesh key={idx} position={[Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]} rotation={[Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5]}>
          <tetrahedronGeometry args={[2, 0]} />
          <meshPhongMaterial color="#ffffff" side={DoubleSide} />
        </mesh>
      ))}
    </group>
  )
}