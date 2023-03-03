import { Link } from "react-router-dom";
import TechIcon from "./TechIcon";

const Modal = (props) => {
  if (!props.show) {
    return null
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <div className="modal-header">
          <h4 className="modal-title">{props.project.title}</h4>
        </div>
        <div className="modal-body">
          {props.project.description}
          <h4>Technology Used </h4>
          <div id='technology-used'>
            {props.project.technologyUsed.map((item) =>
              <TechIcon key={item.name} technologyUsed={item.name} />
            )}
          </div>
        </div>
        <div className="modal-footer">
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
          <button
            className="button"
            onClick={props.onClose}
          >Close</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;