import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { useState } from "react";

const ProjectPreview = (props) => {
  
  const url = "/projects/" + hyphenateWords(props.title)

  const [showMore, setShowMore] = useState(false);




  return ( 
    <div id='project-card'>
        <img 
            id='project-image'
            src={props.image} 
            alt={props.title}
        />

      <div id='project-details'>
        <h3>{props.title}</h3>

        <button 
          class='show-more-button'
          onClick={() => setShowMore(!showMore)}
        >
          Details
        </button>
        {showMore ? 
          <p class='project-description-invisible'>{props.project.description}</p>
        : ""
        }
        

        <h4>Technology Used: </h4>
        <div id='technology-used'>
          <img src="/icons/html.png" alt="" />
          <img src="/icons/css.png" alt="" />
          <img src="/icons/javascript.png" alt="" />
        </div>
        <div id='project-links'>
          <Link to={props.project.repositoryLink}> 
            <button id='repo-link'>
              Repo Link
            </button>
          </Link>
          <Link to={props.project.deploymentLink}> 
            <button id='deployment-link'>
              App Link
            </button>
          </Link>
        </div>
      </div>

    </div>  
  );
}

export default ProjectPreview;