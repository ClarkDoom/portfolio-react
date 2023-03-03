import { useState } from "react";
import React from 'react';
import Modal from "./Modal";


const ProjectPreview = (props) => {
  
  const [show, setShow] = useState(false)

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
          className='show-more-button'
          onClick={()=> setShow(true)}
        >
          Details
        </button>
      
        <Modal 
          onClose={()=> setShow(false)} 
          show={show}
          project={props.project}
        />
      
      </div>

    </div>  
  );
}

export default ProjectPreview;