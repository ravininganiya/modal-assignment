import React, { useState } from "react";
import Modal from "./components/Modal";
import NavBar from "./layout/NavBar";
import "./styles/main.scss";
const App = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <NavBar />
      <div className="app_container">
        <button onClick={() => handleShow()} className="btn01">
          Click me
        </button>
        {show ? (
          <Modal
            title={data.title}
            onClose={() => setShow(false)}
            setShow={setShow}
            show={show}
          >
            <p>{data.body}</p>
          </Modal>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default App;

const data = {
  title: "Modal Header",
  body: ` Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.`
};
