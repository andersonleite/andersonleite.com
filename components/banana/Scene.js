import { Canvas } from '@react-three/fiber';

const Scene = (props) => {
  return (
    <Canvas gl={{ alpha: false }} camera={{ near: 0.01, far: 110, fov: 30 }}>
      <color attach="background" args={['#ffbf40']} />
      {props.children}
    </Canvas>
  );
};

export default Scene;
