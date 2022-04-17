import { Canvas } from "@react-three/fiber";

import * as THREE from 'three';

const Scene =(props) =>{

  const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)

  return (


    <Canvas
      pixelRatio={window.devicePixelRatio}
      camera={OrthographicCamera}>

      {props.children}
      
    </Canvas >
  )
}

export default Scene
