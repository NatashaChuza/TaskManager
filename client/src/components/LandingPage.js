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
      this.props.history.push("/dashboard/home");
    }
  }
  static contextType = Consumer;
  render() {
    return (
      <LandingBackground>
        <WelcomeCover className="no-mobile"/>
    {/* <Text>{this.props.auth.newUser}</Text> */}
        <WelcomeText className="no-mobile">Welcome To Task Manager</WelcomeText>
       {this.state.modalVisible ?<Popup className="popup-mobile">
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
              style={{ color: "#FF2511", fontSize: "35px" }}
              onClick={() => {
                this.context.toggle();
              }}
            />
          )}
        </ModeButton>
        <Button className="button-mobile border-radius-30">
          <ButtonText onClick={()=>{
            this.setState({
              modalVisible: !this.state.modalVisible
            })
          }}>Get Started!</ButtonText>
        </Button>
        <Card>
          <Triangle className="no-mobile"/>
          <TriangleSmall className="no-mobile"/>
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
            className="no-mobile"
          >
            <SmallCard className="no-mobile">
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
            <SmallCard1 className="no-mobile">
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
            <SmallCard2 className="no-mobile">
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
            <SmallCard3 className="no-mobile">
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
          <div className="landing-top-mobile no-desktop">
        <WelcomeText className="welcome-text-mobile">Welcome To Task Manager</WelcomeText>
          </div>
          <div className="landing-mobile">
          <SmallCard className="card-mobile">
              <CardRectangle className="rectangle-mobile"/>
              <div
                style={{
                  width: "20vh",
                  position: "relative",
                  top: "35%",
                  left: "15%",
                }}
              >
                <CardText className="card-text-mobile">Organize Your Tasks</CardText>
              </div>
            </SmallCard>
            <SmallCard1 className="card-mobile">
              <CardRectangle className="rectangle-mobile"/>
              <div
                style={{
                  width: "25vh",
                  position: "relative",
                  top: "35%",
                  left: "15%",
                }}
              >
                <CardText className="card-text-mobile">Stay On Track</CardText>
              </div>
            </SmallCard1>
            <SmallCard2 className="card-mobile">
              <CardRectangle className="rectangle-mobile"/>
              <div
                style={{
                  width: "20vh",
                  position: "relative",
                  top: "35%",
                  left: "15%",
                }}
              >
                <CardText className="card-text-mobile">Set Goals</CardText>
              </div>
            </SmallCard2>
            <SmallCard3 className="card-mobile">
              <CardRectangle className="rectangle-mobile"/>
              <div
                style={{
                  width: "20vh",
                  position: "relative",
                  top: "35%",
                  left: "15%",
                }}
              >
                <CardText className="card-text-mobile">Reach Your Milestones</CardText>
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
