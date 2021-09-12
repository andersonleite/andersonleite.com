import { Canvas } from "@react-three/fiber";

const SceneT =(props) =>{
  return (
    <Canvas
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
      args={[75, window.innerWidth / window.innerHeight, 1, 1000]}
      camera={{ position: [props.x || 0, props.y || 0, props.z || 4] }
      }>
      {/* <ambientLight color={'#999999'}/> */}
      <directionalLight color={'#ffffff'} intensity={1} position={[1, 0, 0]} />
      <directionalLight color={'#87CAC8'} intensity={1} position={[0.75, 1, 0.5]} />
      <directionalLight color={'#18403E'} intensity={1} position={[-0.75, -1, 0.5]} />
      {props.children}
    </Canvas >
  )
}

export default SceneT