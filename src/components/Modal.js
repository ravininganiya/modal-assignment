import React from "react";

const Modal = (props) => {
  return (
    <>
      <div className="modal" onClick={props.onClose}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <div className="modal_header">
            <span>{props.title}</span>
            <span onClick={props.onClose}>x</span>
          </div>
          <div className="modal_body">{props.children}</div>
          <div className="modal_footer">
            <button onClick={props.onClose}>close</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
