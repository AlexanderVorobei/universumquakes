import React, { useRef, useState } from "react";
import { Instances, Instance } from '@react-three/drei';

import { useLoader } from "@react-three/fiber";
import {TextureLoader } from "three";
import Quakes from "./Quakes";

function QuakesApp(props) {

    const [colorMap, emissiveMap] = useLoader(TextureLoader, [
        "./textures/Quakes/circles.png",
        "./textures/Quakes/circles_inv.png"
    ])

    const instsRef = useRef();

    return (
        <>
            <Instances >
                <sphereGeometry attach="geometry"
                    args={[0.02, 32, 32]}
                />

                <meshLambertMaterial
                    emissive={'#f8fad4'}
                    /* emissive={'#ffba02'} */
                    /* emissive={'#ff0000'} */

                    emissiveIntensity={0.7}
                    emissiveMap={emissiveMap}
                    map={colorMap}
                /* fog={true} */
                />

                <Quakes />

            </Instances>

        </>


    )
};

export default QuakesApp;