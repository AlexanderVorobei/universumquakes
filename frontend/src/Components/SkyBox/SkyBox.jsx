import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { BackSide } from "three";
import { useTexture } from "@react-three/drei";

function SkyBox() {
    const dicesTextures = useTexture([
        'textures/SkyBox/GalaxyTex_PositiveX.png',
        'textures/SkyBox/GalaxyTex_NegativeX.png',
        'textures/SkyBox/GalaxyTex_PositiveY.png',
        'textures/SkyBox/GalaxyTex_NegativeY.png',
        'textures/SkyBox/GalaxyTex_PositiveZ.png',
        'textures/SkyBox/GalaxyTex_NegativeZ.png'
    ]);

    const mesh = useRef();

    useFrame(() => {
        mesh.current.rotation.y = -0.5;
        mesh.current.rotation.z = Math.PI / 3;
    });

    return (
        <mesh ref={mesh}>

            <boxBufferGeometry args={[20, 20, 20]} />
            {dicesTextures.map((texture, idx) =>
                <meshBasicMaterial key={texture.id} attach={`material-${idx}`} map={texture} side={BackSide} />
            )}
        </mesh>
    )
}

export default SkyBox;