import React, { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";

import Quake from "./Quake";

import dataJSON from "./moonquakes.json";

function calcXYZ(lat, lon) {
    let rDotsPlace = 1.75;
    let x = rDotsPlace * Math.cos(lat * Math.PI / 180) * Math.cos(lon * Math.PI / 180);
    let y = rDotsPlace * Math.cos(lat * Math.PI / 180) * Math.sin(lon * Math.PI / 180);
    let z = rDotsPlace * Math.sin(lat * Math.PI / 180)

    return ([x, y, z])
}

const palletes = [
    { colorMain: '#eb7d67', colorHover: '#f58169', colorEmission: '#f000ff' },
    { colorMain: '#9B2226', colorHover: '#cc2b30', colorEmission: '#f000ff' },
    { colorMain: '#4d80b3', colorHover: '#5996d4', colorEmission: '#f000ff' },
    { colorMain: '#005F73', colorHover: '#028aa6', colorEmission: '#f000ff' },
    { colorMain: '#8f0194', colorHover: '#a803ad', colorEmission: '#f000ff' },
    { colorMain: '#018251', colorHover: '#04b873', colorEmission: '#f000ff' }
];


function Quakes(props) {

    const instsRef = useRef();

    var isRotate = true

    useFrame(({ clock }) => {
        if (isRotate) {
            const elapsedTime = clock.getElapsedTime();
            instsRef.current.rotation.y = elapsedTime / 24.0;
        }
        else {
            instsRef.current.rotation.y = 0.0;
        }
    });

    return (
        <>
            <group ref={instsRef}>
                {dataJSON.map((props, i) => {
                    let dotPos = calcXYZ(props.data.lat, props.data.lon);
                    let palette = palletes[props.data.type];
                    return (
                        <Quake key={i}
                            position={dotPos}
                            name={props.name}
                            date={{ year: props.date.year, month: props.date.month, day: props.date.day, hour: props.date.hour, min: props.date.min, sec: props.date.sec }}
                            data={{ type: props.data.type, duration: props.data.duration, lat: props.data.lat, lon: props.data.lon, mag: props.data.mag, depth: props.data.depth, piclink: "/data/waveform_01.png", soundlink: "/data/stereo_file1.wav" }}
                            color={palette} />
                    )
                })}

            </group>
        </>
    )
};

export default Quakes;