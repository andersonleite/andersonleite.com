import styles from '../../styles/Lab.module.scss'

import React from 'react';
import { Canvas } from '@react-three/fiber';

export default function TemplatePage() {
  return (
    <div className={styles.full}>
      <Canvas className="canvas" dpr={[1, 2]}>
        <mesh position={[0,0,0]}>
          <boxGeometry />
          <meshBasicMaterial color="orange" />
        </mesh>
      </Canvas>
    </div>
  );
}
