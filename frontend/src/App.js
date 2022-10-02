import React, { Suspense, useState } from 'react';

import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import './App.css';
import Moon from './Components/Moon/Moon';
import SkyBox from './Components/SkyBox/SkyBox';

import styled from 'styled-components';

import QuakesApp from './Components/Moon/quakes/QuakesApp';
import Page1 from './Components/Pages/page1';

// Create custom styles

const RunButtonContainer = styled.div`
position: fixed;
top: 20px;
left: 20px;
z-index: 300;
`;

const MenuContainer = styled.div`
  position: fixed;
  top :20px;
  right: 20px;

  width: 60%;
  height: 80px;

  background-color: rgba(154, 206, 235, 0.5);

  z-index :300;
`;

const ContentContainer = styled.div`
position: fixed;
top :20px;
right: 80px;

width: 60%;
border-radius: 10px;

background-color: rgba(154, 206, 235, 0.25);

z-index :300;
`;

// Light control

function App() {

  const [containerVisibility, setVisibility] = useState(true);

  const hideContainer = () => {
    setVisibility(false);
  }

  const showContainer = () => {
    setVisibility(true);
  }

  return (
    <>
      <RunButtonContainer>
        {containerVisibility ?
          <div onClick={hideContainer} className="buttonRun">
            <p>Run Exploration!</p>
          </div>
          :
          <div onClick={showContainer} className="buttonRun">
            <p>Return</p>
          </div>
        }
      </RunButtonContainer>

      {/*       {containerVisibility ?
        <MenuContainer></MenuContainer>
        : ""
      } */}

      {containerVisibility ?
        <ContentContainer>
          <Page1 />
        </ContentContainer>
        : ""
      }

      <div className="App">
        <Canvas style={{ background: "#000000" }}>
          <Suspense fallback={null}>

            {containerVisibility ?
              < Moon
                position={[-4.5, 0, 0]}
                isOrbiting={false}
                isRotate={true}
                cameraPosition={[0, 0, 5]}
              />
              :
              <Moon
                position={[0, 0, 0]}
                isOrbiting={true}
                isRotate={true}
                cameraPosition={[0, 0, 4]} />
            }

            {containerVisibility ?
              <directionalLight
                position={[10, 0, -20]}
                intensity={1.0}
              />
              :
              <directionalLight
                position={[10, 0, 0]}
                intensity={0.7} />
            }

            {!containerVisibility ?
              <ambientLight color={'#f6aa1c'} intensity={0.13} />
              : ""
            }

            {!containerVisibility ?
              <QuakesApp />
              : ""
            }

            <SkyBox />

            {/* <primitive object={new THREE.AxesHelper(10)} /> */}
          </Suspense>
        </Canvas>


      </div>
    </>
  );
}

export default App;
