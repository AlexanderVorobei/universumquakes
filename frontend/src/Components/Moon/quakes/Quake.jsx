import React, { useRef, useState } from "react";
import { Html } from "@react-three/drei";
import { Instance } from '@react-three/drei';
import * as THREE from 'three'
import waveformImg from "./data/waveform_01.png"
import waveSound from "./data/stereo_file1.wav"
import styled from "styled-components";
import { useFrame } from "@react-three/fiber";
import ReactAudioPlayer from 'react-audio-player';


function Quake({ position = [], name, date = {}, data = {}, color = {} }) {

    const ref = useRef();

    const [isHovered, setHover] = useState(false)
    const [isActive, setActive] = useState(false)

    useFrame((state) => {
        ref.current.scale.x = ref.current.scale.y = ref.current.scale.z = THREE.MathUtils.lerp(ref.current.scale.z, isHovered || isActive ? 1.6 : 1, 0.1);
        ref.current.color.lerp(ref.current.color.set(isHovered ? color.colorHover : color.mainColor), isHovered ? 1 : 0.1)
        /* ref.current.color.lerp(ref.current.color.set(!isHovered ? color.colorHover : color.mainColor), !isHovered ? 1 : 0.1) */
    })

    return (
        <>
            <Instance
                color={color.colorMain}
                position={position}
                ref={ref}

                onClick={(e) => setActive(!isActive)}
                /* onPointerOver={(e) => (e.stopPropagation(), setHover(true))} */
                onPointerOver={(e) => setHover(true)}
                onPointerOut={(e) => setHover(false)}
            >
                <Html>
                    {isHovered || isActive ?
                        <div className="annotationContainer">
                            <table>
                                <tr> <td className="leftCol">Name : </td> <td>{name}</td> </tr>
                                <tr> <td className="leftCol">Type : </td> <td>{data.type}</td> </tr>
                                <tr> <td className="leftCol">Date : </td> <td>{date.year}-{date.month}-{date.day} at  {date.hour}:{date.min}:{date.sec}</td> </tr>
                                <tr> <td className="leftCol">Latitude : </td> <td>{data.lat} deg</td> </tr>
                                <tr> <td className="leftCol">Longitude : </td> <td>{data.lon} deg</td> </tr>
                                <tr> <td className="leftCol">Depth : </td>    <td>{data.depth} km</td> </tr>
                                <tr> <td className="leftCol">Magnitude : </td> <td>{data.lat} M</td> </tr>
                                <tr> <td className="leftCol">-999 : </td> <td>No Data</td> </tr>
                                <tr> <td colspan="2" className="leftCol"> <img className="waveform" src ={waveformImg}/></td> </tr>
                                <tr> <td colspan="2" className="leftCol"> <ReactAudioPlayer src={waveSound} autoPlay={false} controls={true}  /></td> </tr>
                            </table>
                        </div>
                        :
                        ""
                    }
                </Html>
            </Instance>
        </>
    )
};

export default Quake;

