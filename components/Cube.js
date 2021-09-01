import { useControls } from "leva"

export default function Cube() {

  const { y } = useControls('Cube', { y: {value: 1, min: 0, max: 10, step: 1 }})
  const { x } = useControls('Cube', { x: {value: 1, min: 0, max: 10, step: 1 }})
  const { z } = useControls('Cube', { z: {value: 1, min: 0, max: 10, step: 1 }})
  const { wireframe } = useControls('Cube', { wireframe: true })

  return (
    <mesh>
      <boxGeometry args={[x, y, z]} />
      <meshBasicMaterial color="cyan" wireframe={wireframe} />
    </mesh>
  )
}
