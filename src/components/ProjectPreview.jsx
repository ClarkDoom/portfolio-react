import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  
  const url = "/projects/" + hyphenateWords(props.title)

  return ( 
    <div id='project-card'>
      <div id='project-image'>
        <img 
            src={props.image} 
            alt={props.title}
        />
      </div>

      <div id='project-details'>
        <h3>
          {props.title}
        </h3>
        <h4>Technology Used: </h4>
        <div id='technology-used'>
          <img src="/icons/html.png" alt="" />
          <img src="/icons/css.png" alt="" />
          <img src="/icons/javascript.png" alt="" />
        </div>
        <Link to={url}> 
          <button id='learn-more'>
            Learn more
          </button>
        </Link>
      </div>

    </div>  
  );
}

export default ProjectPreview;