import React from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three/src/loaders/TextureLoader";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { PerspectiveCamera } from '@react-three/drei'


function Moon({ position = [], isOrbiting, isRotate, cameraPosition }) {

    const [colorMap, normalMap, displacementMap] = useLoader(TextureLoader, [
        "./textures/Moon/lroc_color_poles_4k.jpg",
        "./textures/Moon/moon-kaguya-nm.jpg",
        "./textures/Moon/moon_displacement_16.jpg",
    ]);

    const moonRef = useRef();

    useFrame(({ clock }) => {
        if (isRotate) {
            const elapsedTime = clock.getElapsedTime();
            moonRef.current.rotation.y = elapsedTime / 24.0;
        }
        else {
            moonRef.current.rotation.y = 0.0;
        }
    });

    return (
        <>
            <mesh ref={moonRef} position={position}>
                <sphereGeometry args={[1.7274, 250, 250]} />
                <meshPhongMaterial />
                <meshStandardMaterial
                    map={colorMap}

                    normalMap={normalMap}
                    normalScale={0.5}

                    displacementMap={displacementMap}
                    displacementScale={0.01}

                />
                <OrbitControls
                    enableZoom={isOrbiting}
                    enablePan={false}
                    enableRotate={isOrbiting}
                    zoomSpeed={0.6}
                    panSpeed={0.5}
                    rotateSpeed={0.2}
                    minDistance={2.5}
                    maxDistance={7}
                />
            </mesh>
            <PerspectiveCamera makeDefault position={cameraPosition} fov={60} isOrbiting={false} />

        </>
    )
}

export default Moon;