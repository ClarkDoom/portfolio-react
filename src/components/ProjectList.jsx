import ProjectPreview from "./ProjectPreview";

const ProjectList = ({ projects }) => {
  return (
    <div id="project-card-list">
      {projects.map((project, idx) =>
        <ProjectPreview
          project={project}
          title={project.title}
          image={project.image}
          key={idx}
        />
      )}
    </div>
  );
}

export default ProjectList;

