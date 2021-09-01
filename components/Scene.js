import Cube from "./Cube";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { useControls } from "leva"

export default function Scene() {

  const { visible } = useControls('Axes Helper', { visible: true })
  const { size } = useControls('Axes Helper', { size: { value: 1, min: 0, max: 10, step: 1 } })

  return (
    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 0, 3] }
      }>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Cube />
      <axesHelper args={[size]} visible={visible} />
    </Canvas >
  )
}