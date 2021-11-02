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

export function Sphere(props) {
  const [ref, api] = useSphere(() => ({ mass: 1, position: [0, 4, 0], ...props }))
  useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 1, 1))

  return (
    <mesh >
      <sphereGeometry />
      <meshNormalMaterial attach="material" />
    </mesh>
  )
}


export function Ball() {

  return (
    <mesh castShadow position={[2, .2, .25]}>
      <boxGeometry args={[.4, .4, .4]} />
      <meshLambertMaterial color={'red'} />
    </mesh>
  )
}
