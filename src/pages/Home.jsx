import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import React from "react";

import ReactGA from 'react-ga';
const TRACKING_ID = "G-7MR4KGM2F9"; // YOUR_OWN_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
ReactGA.pageview(window.location.pathname + window.location.search);

const Home = () => {
  return (
    <>
      <div id="home-page">
        <div id='home-details'>
          <h3>Hi, I'm Brandon.</h3>
          <h2>Full Stack Developer.</h2>
          <p>Proven leader with 10+ years SaaS experience.</p>
          <a href="/#about-page">Learn More</a>
        </div>
        <img width="40%" src="/headshot.png" alt="" />
      </div>
      <div id="right-section-divider"></div>
      <About />
      <div id="combo-contact-project">
        <Contact />
        <Projects />
      </div>
    </>
  );
}

export default Home;