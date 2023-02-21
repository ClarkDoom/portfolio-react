import './NavBar.css'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import React, { useState, useEffect } from 'react';

const NavBar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth)
    }
    window.addEventListener('resize', changeWidth)
    return () => {
      window.removeEventListener('resize', changeWidth)
    }
  }, [])

  const onResumeClick = () => {
    // using Java Script method to get PDF file
    fetch('resume.pdf').then(response => {
        response.blob().then(blob => {
            // Creating new object of PDF file
            const fileURL = window.URL.createObjectURL(blob);
            // Setting various property values
            let alink = document.createElement('a');
            alink.href = fileURL;
            alink.download = 'resume.pdf';
            alink.click();
        })
    })
}
  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className="list">
          <li className="items" id="home-link">
            <HashLink to="/#home-page">
              BH Portfolio
            </HashLink>
          </li>
          <li className="items">
            <HashLink to="/#about-page">
              About
            </HashLink>
          </li>
          <li className="items">
            <HashLink to="/#contact-page">
              Contact
            </HashLink>
          </li>
          <li className="items">
            <HashLink to="/#project-page">
              Projects
            </HashLink>
          </li>
          <li className="items">
            <button id="resume-btn" onClick={onResumeClick}>
              Download Resume
            </button>
          </li>
        </ul>
      )}
      <button onClick={toggleNav} className="nav-btn">
        <img src="/nav.png" alt="" />
      </button>
      {/* <div id='home'>
        <HashLink to="/#home-page">
          BH Portfolio
        </HashLink>
      </div>
      <div id="nav-links">
        <div>
          <HashLink to="/#about-page">
            About
          </HashLink>
        </div>
        <div>
          <HashLink to="/#contact-page">
            Contact
          </HashLink>
        </div>
        <div>
          <HashLink to="/#project-page">
            Projects
          </HashLink>
        </div>
        <div>
          <Link to="/resume">
            Resume
          </Link>
        </div>
      </div> */}
    </nav>
  );
}

export default NavBar;