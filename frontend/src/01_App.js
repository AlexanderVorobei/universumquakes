import React, { Suspense } from 'react';
import { Canvas } from "@react-three/fiber";

import * as THREE from "three";

import './App.css';
import Moon from './Components/Moon/Moon';
import SkyBox from './Components/SkyBox/SkyBox';


function App() {

  var lightPosition = [10, 0, 0];

  return (
    <div className="App">
      <Canvas >
      {/* <Canvas orthographic camera={{ position: [0, 0, 3], left: -3, right: -3, top: -3, bottom: -3, zoom: 150}}> */}
      {/* <Canvas camera={{position: [0, 0, 10]  }}> */}
        <Suspense fallback={null}>
          {/* <OrthographicCamera makeDefault zoom={40} /> */}

          <Moon position={[-4, 0, 0]} isOrbiting={true} isRotate={true} />
          <SkyBox />

          {/* <pointLight
            color='#f6f3ea'
            position={lightPosition}
            intensity={1.0} /> */}
          {/* <ambientLight args={[0xffffff]} intensity={0.1} /> */}

          <directionalLight
            position={lightPosition}
            intensity={1.0}
          />

          <primitive object={new THREE.AxesHelper(10)} />
        </Suspense>
      </Canvas>


    </div>
  );
}

export default App;
