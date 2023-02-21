import { hyphenateWords } from "../utilities/hyphenateWords";
import { Link } from "react-router-dom";
import { useState } from "react";
import React from 'react';
import Modal from "./Modal";
import TechIcon from "./TechIcon";


const ProjectPreview = (props) => {
  
  // const url = "/projects/" + hyphenateWords(props.title)

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

        <h4>Technology Used: </h4>
        <div id='technology-used'>
          {props.project.technologyUsed.map((item) => 
            <TechIcon key={item.name} technologyUsed={item.name}/>
            )}
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