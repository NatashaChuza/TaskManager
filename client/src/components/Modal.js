import React from "react";
import { FormContainer, CustomClearIcon} from '../Themes/Theme'
import "./Modal.css";

class Modal extends React.Component {
  render() {
    return (
        <FormContainer>
          <button className="invisible-btn" onClick={this.props.closeModal}><CustomClearIcon/></button>
       {this.props.children}
       </FormContainer>
    );
  }
}

export default Modal;
