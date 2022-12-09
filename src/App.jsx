import React, { Component } from 'react';
import Navbar from './components/Navbar';
import DisplayHeader from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Portfolio from './components/Portfolio';
import resumeData from './resumeData';
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./css/app.css"

function DisplayImage({ offset }) {
  return (
    <ParallaxLayer
      offset={offset}
      speed={0.5}
      factor={3}
      style={{
        backgroundImage: `url("images/homebg.jpg")`,
        backgroundPosition: 'center',
      }}></ParallaxLayer>
  );
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar active="Home"></Navbar>
        <Parallax pages={7}>
          <DisplayHeader data={resumeData} />
          <DisplayImage offset={2} />
          <DisplayImage offset={4} />
          <DisplayImage offset={6} />
          <ParallaxLayer offset={1} >
            <About resumeData={resumeData} />
          </ParallaxLayer>
          <ParallaxLayer
            offset={2}
            factor={2}>
            <Resume resumeData={resumeData} />
          </ParallaxLayer>
          <ParallaxLayer offset={5}>
            <Portfolio resumeData={resumeData} />
          </ParallaxLayer>
        </Parallax>
      </div>
    );
  }
}