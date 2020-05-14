import React from "react";
import "./Modal.css";

class Modal extends React.Component {
  render() {
    return (
      <div className="modalContainer">
       {this.props.children}
      </div>
    );
  }
}

export default Modal;
