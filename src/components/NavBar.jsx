import './NavBar.css'
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
        <div className="list">
          <p className="items" id="home-link">
            <HashLink to="/#home-page">
              BH Portfolio
            </HashLink>
          </p>
          <p className="items">
            <HashLink to="/#about-page">
              About
            </HashLink>
          </p>
          <p className="items">
            <HashLink to="/#project-page">
              Projects
            </HashLink>
          </p>
          <p className="items">
            <button id="resume-btn" onClick={onResumeClick}>
              Download Resume
            </button>
          </p>
        </div>
      )}
      <button onClick={toggleNav} className="nav-btn">
        <img src="/nav.png" alt="" />
      </button>
    </nav>
  );
}

export default NavBar;