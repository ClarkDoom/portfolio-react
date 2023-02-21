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
        </div>
        <div className="modal-footer">
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