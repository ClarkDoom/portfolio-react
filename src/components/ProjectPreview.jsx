import { findProject } from "../utilities/findProject";
import { hyphenateWords } from "../utilities/hyphenateWords";

const ProjectPreview = (props) => {
  
  const url = "/projects/" + hyphenateWords(props.title)


  return ( 
    <div>
      <img 
          src={props.image} 
          alt={props.title}
      />
      <section>
        <h3>
          {props.title}
        </h3>
        <form action={url}> 
          <button>
            Learn more
          </button>
        </form>
      </section>
    </div>  
  );
}

export default ProjectPreview;