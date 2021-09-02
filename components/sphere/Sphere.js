import React from "react";
import { KeyLight, BackDrop, GroundPlane, FillLight, RimLight } from "./Light";

export default function Sphere() {
  return (
    <>
      {/* <ambientLight /> */}
      <KeyLight brightness={10} color={"white"} />
      <mesh visible userData={{ test: "hello" }} position={[0, 0, 0]} castShadow>
        <sphereGeometry attach="geometry" args={[1, 16, 16]} />
        <meshStandardMaterial
          attach="material"
          color="white"
          transparent
          roughness={0.1}
          metalness={0.1}
        />
      </mesh>
      <FillLight brightness={2.6} color="#bdefff" />
      <RimLight brightness={54} color="#fff" /> 
      <BackDrop />
      <GroundPlane />
    </>
  );
}