import About from "../components/About";
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import React from "react";



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
      <div className="projects-container">
        <Projects />
      </div>
      <About />
      {/* <div id="combo-contact-project"> */}
      {/* </div> */}
    </>
  );
}

export default Home;