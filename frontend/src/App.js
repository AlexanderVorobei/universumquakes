import React, { Suspense, useState } from 'react';
import { Canvas } from "@react-three/fiber";
import './App.css';
import Pulsating from "./Components/pulsating";
import Moon from './Components/Moon/Moon';
import SkyBox from './Components/SkyBox/SkyBox';
import styled from 'styled-components';
import QuakesApp from './Components/Moon/quakes/QuakesApp';
import Home from './Components/Pages/home';

const ContentContainer = styled.div`
  position: fixed;
  margin-right: 10%;
  margin-left: 30%;
  margin-top: 80px;
  margin-bottom: 10%;
  border-radius: 32px;
  max-width: 1100px;
  min-width: 464px;
  max-height: 80%;
  background-color: rgba(154, 206, 235, 0.25);
  z-index :300;
  overflow: scroll;
`;

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <>
    <Pulsating visible={visible}>
      <div onClick={() => setVisible(!visible)} className="button">
        {visible ? "Run Exploration!" : "Back"}
      </div>
    </Pulsating>
      {visible ?
        <ContentContainer>
          <Home />
        </ContentContainer>
        : ""
      }
    <div className="App">
      <Canvas style={{ background: "#000000" }}>
        <Suspense fallback={null}>
          {visible ?
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
              cameraPosition={[0, 0, 4]}
            />
          }
          {visible ?
            <directionalLight
              position={[10, 0, -20]}
              intensity={1.0}
            />
            :
            <directionalLight
              position={[10, 0, 0]}
              intensity={0.7} />
          }
          {!visible ?
            <ambientLight color={'#f6aa1c'} intensity={0.13} />
            : ""
          }
          {!visible ?
            <QuakesApp />
            : ""
          }
          <SkyBox />
        </Suspense>
      </Canvas>
    </div>
  </>
  );
}

export default App;
