import  './NavBar.css'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

const NavBar = () => {
  return ( 
    <nav>
      <div id='home'>
        <Link to="/">
          BH Portfolio
        </Link>
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
      </div>
    </nav>
  );
}

export default NavBar;