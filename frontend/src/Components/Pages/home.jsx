import React, { useRef } from 'react'
import'./parallax.scss'

function Home() {
  return (
    <>
      <h3 className='cardName'>Universum Quakes Demo</h3>
      <div className='imgContainerCover'>
          <div className='imgContainer'>
          </div>
      </div>
      <div className='textContainer'>
        <p>This project is the solution for challenge <a href="https://2022.spaceappschallenge.org/challenges/2022-challenges/moonquake-map/details">Make a Moonquake Map! </a>
          of <a href='https://www.spaceappschallenge.org/'> SPACE APPS 2022</a>.</p>
        <p>Our team <a href="https://2022.spaceappschallenge.org/challenges/2022-challenges/moonquake-map/teams/universumquakes/project">UniversumQuakes</a> developes a Demo of 3D Scene with the Moon and positions of Moonquakes.
          Data for Moonquakes was taken from NASA and was adopted for database.</p>
        <p>The Apollo 11 astronauts brought wih them seismometers to the Moon. So the exploration of seismic activity on the Moon begins.
          The Apollo 11 seismometer returned data for just three weeks but provided a useful first look at lunar seismology.
          More advanced seismometers were deployed at the Apollo 12, 14, 15, and 16 landing sites and transmitted data to Earth until September 1977.
          <a href="https://moon.nasa.gov/resources/13/apollo-11-seismic-experiment/"> More... </a>
        </p>
        <p>For begin exploration please click on the button in the top left corner.</p>
      </div>
    </>
  )
}

export default Home;