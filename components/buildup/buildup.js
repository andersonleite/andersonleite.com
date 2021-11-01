export function Cube(props) {
  return (
    <mesh {...props}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial attach="material" color="#87CAC8" wireframe={true} />
    </mesh>
  )
}

export function Cylinder(props) {
  return (
    <mesh position={[0, 1.5, 0]}>
      <cylinderGeometry {...props} />
      <meshBasicMaterial attach="material" color="#46bfba" />
    </mesh>
  )
}
