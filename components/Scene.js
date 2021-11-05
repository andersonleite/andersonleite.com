import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import { useControls } from "leva"

const Scene =(props) =>{

  const { visible } = useControls('Axes Helper', { visible: true })
  const { size } = useControls('Axes Helper', { size: { value: 1, min: 0, max: 100, step: 1 } })

  return (


    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [props.x || 0, props.y || 0, props.z || 3] }
      }>
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      {props.children}
      <axesHelper args={[size]} visible={visible} />
    </Canvas >
  )
}

export default Scene
