import React, { useRef } from "react";
import { Canvas,useFrame,useLoader } from "@react-three/fiber";

import dynamic from 'next/dynamic'
import styles from '../../styles/Lab.module.scss'
import Cube from '../../components/Cube'
import * as THREE from "three";
// import earthImg from '/textures/wall.jpg'

const SceneWithoutSSR = dynamic(
  () => import('../../components/Scene'),
  { ssr: false }
)

const Sphere=()=>{
  const base=new THREE.TextureLoader().load('https://raw.githubusercontent.com/DevTips/Parallax-on-the-Web-DevTips-/master/images/model2.jpg')
  const ref=useRef()
  useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.01))
  return(
     <mesh visible castShadow ref={ref}>
     <directionalLight intensity={0.5} />
     <sphereGeometry attach="geometry" args={[1, 320, 320]} />
     <meshBasicMaterial
        map={base}
        color="white"
     />
     </mesh>
  )
}


export default function LabPage() {
  return (
    <div className={styles.full}>
      <SceneWithoutSSR z={3}>
        <ambientLight />
         <Sphere/>
      </SceneWithoutSSR>
    </div>
  )
}
