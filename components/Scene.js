import Cube from "./Cube";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'

export default () =>
  <Canvas
    pixelRatio={window.devicePixelRatio}
    camera={{ position: [0, 0, 3] }}>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <Cube/>
    <axesHelper />
  </Canvas>

