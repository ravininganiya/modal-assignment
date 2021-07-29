import React from "react";
import ReactDOM from "react-dom";
const Modal = (props) => {
  return ReactDOM.createPortal(
    <>
      <div className="modal" onClick={props.onClose}>
        <div className="modal_content" onClick={(e) => e.stopPropagation()}>
          <header className="modal_header">
            <span>{props.title}</span>
            <span onClick={props.onClose}>x</span>
          </header>
          <section className="modal_body">{props.children}</section>
          <footer className="modal_footer">
            <button onClick={props.onClose}>close</button>
          </footer>
        </div>
      </div>
    </>,
    document.getElementById("custom_modal")
  );
};

export default Modal;
