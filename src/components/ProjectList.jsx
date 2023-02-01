import ProjectPreview from "./ProjectPreview";

const ProjectList = ({projects}) => {
  return ( 
      <ul>
        {projects.map(project => 
          <li>
            <ProjectPreview 
              title={project.title}
              image={project.image}
            />
          </li>
        )}
      </ul>
  );
}

export default ProjectList;

