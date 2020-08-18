import React from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import {
  LoginText,
  Input,
  LoginButton,
  ButtonText,
  Text,
} from "../../Themes/Theme";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
    errors: {},
  };

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard/home");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard/home"); // push user to dashboard when they login
    }
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;
    console.log(errors)
    return (
      <div>
        <LoginText>Login</LoginText>
        <form onSubmit={this.onSubmit}>
          <div
            style={{
              position: "absolute",
              left: "5%",
              height: "42vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              top: "10%",
            }}
          >
            <span className="red-text">
              {errors.email}
              {errors.emailnotfound}
            </span>
            <Input
              placeholder="Email"
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              className="input-box-mobile"
            />

            <span className="red-text">
              {errors.password}
              {errors.passwordincorrect}
            </span>
            <Input
              placeholder="Login"
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              className="input-box-mobile"
            />
          </div>
          <LoginButton type="submit" className="login-btn-mobile">
            <ButtonText>Login</ButtonText>
          </LoginButton>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(withRouter(Login));
