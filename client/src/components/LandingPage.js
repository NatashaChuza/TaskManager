import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { withTheme } from "styled-components";
import { connect } from "react-redux";
import { goToLogin} from "../actions/authActions"
import Register from "./auth/Register";
import Login from "./auth/Login";

import {
  LandingBackground,
  Text,
  CardText,
  Card,
  SmallCard1,
  SmallCard2,
  SmallCard3,
  Triangle,
  TriangleSmall,
  SmallCard,
  CardRectangle,
  WelcomeText,
  Button,
  ButtonText,
  WelcomeCover,
  ModeButton,
  Popup,
  LinkButton,
} from "../Themes/Theme";
import { MdBrightness3, MdBrightnessHigh } from "react-icons/md";
import { Consumer } from "../Themes/ThemeProvider";

class LandingPage extends React.Component {
  state = {
    modalVisible: false,
  };
  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
  static contextType = Consumer;
  render() {
    return (
      <LandingBackground>
        {/* <Text>Welcome to task manager, New Here?</Text>
     <Link to="/register">Register </Link>
     <Link to="/login">Login</Link> */}
        <WelcomeCover />
    <Text>{this.props.auth.newUser}</Text>
        <WelcomeText>Welcome To Task Manager</WelcomeText>
       {this.state.modalVisible ?<Popup>
          {this.props.auth.newUser ? (
            <div>
              {" "}
              <Register successfulRegister={this.onSuccessfulRegister}/>
              <div
                style={{
                  position: "absolute",
                  top: "85%",
                  left: "37%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Text>Or</Text>
                <LinkButton onClick={()=>{
                 this.props.goToLogin()
                }}>Go To Login</LinkButton>
              </div>
            </div>
          ) : (
            <Login />
          )}
         
        </Popup>: <></>}
        <ModeButton>
          {this.props.theme.mode === "light" ? (
            <MdBrightness3
              style={{ color: "#E47D80", fontSize: "35px" }}
              onClick={() => {
                this.context.toggle();
              }}
            />
          ) : (
            <MdBrightnessHigh
              style={{ color: "#F5631A", fontSize: "35px" }}
              onClick={() => {
                this.context.toggle();
              }}
            />
          )}
        </ModeButton>
        <Button>
          <ButtonText onClick={()=>{
            this.setState({
              modalVisible: !this.state.modalVisible
            })
          }}>Get Started!</ButtonText>
        </Button>
        <Card>
          <Triangle />
          <TriangleSmall />
          <div
            style={{
              display: "flex",
              width: "70vw",
              justifyContent: "space-evenly",
              position: "relative",
              bottom: "40%",
              left: "15%",
              top: "-50%",
            }}
          >
            <SmallCard>
              <CardRectangle />
              <div
                style={{
                  width: "20vh",
                  position: "relative",
                  top: "35%",
                  left: "15%",
                }}
              >
                <CardText>Organize Your Tasks</CardText>
              </div>
            </SmallCard>
            <SmallCard1>
              <CardRectangle />
              <div
                style={{
                  width: "25vh",
                  position: "relative",
                  top: "35%",
                  left: "15%",
                }}
              >
                <CardText>Stay On Track</CardText>
              </div>
            </SmallCard1>
            <SmallCard2>
              <CardRectangle />
              <div
                style={{
                  width: "20vh",
                  position: "relative",
                  top: "35%",
                  left: "15%",
                }}
              >
                <CardText>Set Goals</CardText>
              </div>
            </SmallCard2>
            <SmallCard3>
              <CardRectangle />
              <div
                style={{
                  width: "20vh",
                  position: "relative",
                  top: "35%",
                  left: "15%",
                }}
              >
                <CardText>Reach Your Milestones</CardText>
              </div>
            </SmallCard3>
          </div>
        </Card>
      </LandingBackground>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});


export default connect(mapStateToProps, {goToLogin})(withTheme(LandingPage));
