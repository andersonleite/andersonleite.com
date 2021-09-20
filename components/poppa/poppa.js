import { useFrame } from "@react-three/fiber"
import { useControls } from "leva"
import { useState, useEffect, useRef } from 'react'

export default function Poppa() {
  const poppa = useRef(poppa)

  const [hovered, setHover] = useState(false)

  const { y } = useControls('Cube', { y: {value: 50, min: 0, max: 100, step: 1 }})
  const { x } = useControls('Cube', { x: {value: 30, min: 0, max: 100, step: 1 }})
  const { z } = useControls('Cube', { z: {value: 16, min: 0, max: 100, step: 1 }})
  const { wireframe } = useControls('Cube', { wireframe: false })

  useFrame(() => {
    if(hovered){
      if(poppa.current.scale.x<2){
        poppa.current.scale.x = poppa.current.scale.x += 0.01
      }
    }else{
      if(poppa.current.scale.x>1){
        poppa.current.scale.x = poppa.current.scale.x -= 0.01
      }
    }
  })

  return (
    <mesh
      ref={poppa}
      onPointerOver={(e)=> setHover(true)}
      onPointerOut={(e)=> setHover(false)}>
      <sphereGeometry args={[x, y, z]} />
      <meshStandardMaterial
        color="#F04F23" wireframe={wireframe}/>
    </mesh>
  )
}
