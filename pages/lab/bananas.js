import styles from '../../styles/Lab.module.scss';

import * as THREE from 'three';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment } from '@react-three/drei';
import { EffectComposer, DepthOfField } from '@react-three/postprocessing';
import dynamic from 'next/dynamic';

function Banana({ z }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF('/assets/banana-v1-transformed.glb');

  const { viewport, camera } = useThree();
  // TODO
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(viewport.height),
    rx: Math.random() * Math.PI,
    ry: Math.random() * Math.PI,
    rz: Math.random() * Math.PI,
  });

  useFrame(() => {
    ref.current.rotation.set(
      (data.rx += 0.001),
      (data.ry += 0.001),
      (data.rz += 0.001)
    );
    ref.current.position.set(data.x * viewport.width, (data.y += 0.025), z);
    if (data.y > viewport.height) {
      data.y = -viewport.height;
    }
  });

  return (
    <mesh
      ref={ref}
      geometry={nodes.banana.geometry}
      material={materials.skin}
      material-emissive="orange"
    />
  );
}

const SceneWithoutSSR = dynamic(() => import('../../components/banana/Scene'), {
  ssr: false,
});

export default function BananasPage({ count = 100, depth = 80}) {
  return (
    <div className={styles.full}>
      <SceneWithoutSSR>
        <spotLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <Banana scale={0.5} />
          <Environment preset="sunset" />
          {Array.from({ length: count }, (_, i) => (
            <Banana key={i} z={-(i / count) * depth -20} />
          ))}
          <EffectComposer multisampling={0}>
            <DepthOfField
              target={[0, 0, depth / 2]}
              focalLength={0.5}
              bokehScale={11}
              height={700}
            />
          </EffectComposer>
        </Suspense>
      </SceneWithoutSSR>
    </div>
  );
}
