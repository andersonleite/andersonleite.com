import React, { Suspense, VFC } from 'react';
import * as THREE from 'three';
import { Canvas } from '@react-three/fiber';
import {Background} from '../../components/monopo/Background'
import { Lense } from '../../components/monopo/Lense';

// import {
// 	enFragmentShader, enVertexShader, jpFragmentShader, jpVertexShader
// } from '../../modules/glsl/shader';
// import { Background } from './Background';
// import { Lense } from './Lense';
// import { TextPlane } from './TextPlane';

export const TCanvas: VFC = () => {
	const OrthographicCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, -10, 10)

	return (
    <div>


    </div>
	)
}
