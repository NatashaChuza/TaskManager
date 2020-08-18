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
  BackgroundMobile
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
      <BackgroundMobile className="background-mobile">
      <NavContainer className="nav-mobile nav-desktop">
        <Logodiv className="nav-item-mobile">
          <TaskmanagerLogo>Task Manager</TaskmanagerLogo>
        </Logodiv>
        <Iconsdiv className="nav-mobile">
          <DivFlex1 className="icons-div-mobile">
            <Link to="/dashboard/home" className="router-mobile">
              <CustomHomeIcon className="icon-mobile" />
            </Link>
            <Link to="/dashboard/home" className="router-link nav-item-mobile">
              <NavbarText>Home</NavbarText>
            </Link>
          </DivFlex1>
          <DivFlex1 className="icons-div-mobile">
            <Link to="/dashboard/tasks" className="router-mobile ">
              <CustomTaskIcon className="icon-mobile" />
            </Link>
            <Link to="/dashboard/tasks" className="router-link nav-item-mobile">
              <NavbarText>My Tasks</NavbarText>
            </Link>
          </DivFlex1>
          <DivFlex1 className="cursor router-mobile">
            <button
              className="invisible-btn cursor lg-btn-mobile logout-btn lg-btn-desktop"
              onClick={this.onLogoutClick}
            >
              <CustomLogoutIcon className="icon-mobile padding-top-10 lg-icon-desktop" />
              <NavbarText className="nav-item-mobile lg-txt-desktop">Logout</NavbarText>
            </button>
          </DivFlex1>
        </Iconsdiv>
        <Spacediv className="nav-item-mobile"></Spacediv>
      </NavContainer>
      </BackgroundMobile>
    );
  }
}
export default connect(null, { logoutUser })(Navbar);
