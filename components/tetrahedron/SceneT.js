import { Canvas } from "@react-three/fiber";

const SceneT =(props) =>{
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      args={[75, window.innerWidth / window.innerHeight, 1, 1000]}
      camera={{ position: [props.x || 0, props.y || 0, props.z || 400] }
      }>
      {props.children}
    </Canvas >
  )
}

export default SceneT