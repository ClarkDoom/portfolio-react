import { findProject } from "../utilities/findProject";
import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";

const ProjectPreview = (props) => {
  
  const url = "/projects/" + hyphenateWords(props.title)


  return ( 
    <div id="project-list">
      <img 
          src={props.image} 
          alt={props.title}
      />

      <section>

        <h3>
          {props.title}
        </h3>

        <Link to={url}> 
          <button id='learn-more'>
            Learn more
          </button>
        </Link>

      </section>
    </div>  
  );
}

export default ProjectPreview;