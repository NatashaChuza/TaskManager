import React from "react";
import {
  NavContainer,
  Logodiv,
  Iconsdiv,
  Spacediv,
  TaskmanagerLogo,
  DivFlex1,
  Text,
  ModeButton,
  NavbarText,
  CustomHomeIcon,
  CustomTaskIcon,
  CustomLogoutIcon,
} from "../../Themes/Theme";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Navbar extends React.Component {

    onLogoutClick = (e) => {
        e.preventDefault();
        this.props.logoutUser();
      };
  render() {
      
    return (
      <NavContainer>
        <Logodiv>
          <TaskmanagerLogo>Task Manager</TaskmanagerLogo>
        </Logodiv>
        <Iconsdiv>
          <DivFlex1>
            <CustomHomeIcon />
            <Link to="/dashboard/home" className="router-link">
              <NavbarText>Home</NavbarText>
            </Link>
          </DivFlex1>
          <DivFlex1>
            <CustomTaskIcon />
            <Link to="/dashboard/tasks" className="router-link">
              <NavbarText>My Tasks</NavbarText>
            </Link>
          </DivFlex1>
          <DivFlex1 className="cursor">
              <button className="invisible-btn cursor" onClick={this.onLogoutClick}>
            <CustomLogoutIcon />
            <NavbarText>Logout</NavbarText>
            </button>
          </DivFlex1>
        </Iconsdiv>
        <Spacediv></Spacediv>
      </NavContainer>
    );
  }
}
export default connect(null, {logoutUser})(Navbar);
