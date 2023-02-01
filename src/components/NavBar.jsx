import  './NavBar.css'
import { Link } from "react-router-dom";

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
          <Link to="/about">
            About
          </Link>
        </div>
        <div>
          <Link to="/contact">
            Contact
          </Link>
        </div>
        <div>
          <Link to="/projects">
            Projects
          </Link>
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